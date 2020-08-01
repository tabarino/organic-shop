import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from '../models/product';
import { first, map } from 'rxjs/operators';
import { convertSnapsDoc } from './db-utils';
import { ShoppingCartItem } from '../models/shopping-cart-item';

@Injectable({
    providedIn: 'root'
})
export class ShoppingCartService {
    constructor(private db: AngularFirestore) {
    }

    async addToCart(product: Product): Promise<void> {
        const cartId = await this.getOrCreateCartId();
        this.db.doc(`shopping-carts/${ cartId }`).collection('items').doc(product.id).snapshotChanges().pipe(
            map(snaps => convertSnapsDoc<ShoppingCartItem>(snaps)),
            first()
        ).subscribe(item => {
            if (!item) {
                this.db.doc(`shopping-carts/${ cartId }`).collection('items').doc(product.id).set({
                    product,
                    quantity: 1
                });
                return;
            }

            this.db.doc(`shopping-carts/${ cartId }`).collection('items').doc(product.id).update({
                quantity: item.quantity + 1
            });
        });
    }

    private async getOrCreateCartId(): Promise<string> {
        const cartId = localStorage.getItem('cartId');

        if (cartId) {
            return cartId;
        }

        const result = await this.create();
        localStorage.setItem('cartId', result.id);
        return result.id;
    }

    private create(): Promise<any> {
        return this.db.collection('shopping-carts').add({ dateCreated: new Date().getTime() });
    }
}
