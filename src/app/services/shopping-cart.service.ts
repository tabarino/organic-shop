import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from '../models/product';
import { first, map } from 'rxjs/operators';
import { convertSnapsDoc } from './db-utils';
import { ShoppingCartItem } from '../models/shopping-cart-item';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ShoppingCartService {
    constructor(private db: AngularFirestore) {
    }

    async addToCart(product: Product): Promise<void> {
        const cartId = await this.getOrCreateCartId();
        const item$ = this.getCartItem(cartId, product.id);
        item$.subscribe(item => {
            let quantity = 1;
            if (item) {
                quantity = item.quantity + 1;
            }

            this.db.doc(`shopping-carts/${ cartId }`).collection('items').doc(product.id).set({
                product,
                quantity
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

    private getCartItem(cartId: string, productId: string): Observable<ShoppingCartItem> {
        return this.db.doc(`shopping-carts/${ cartId }`).collection('items').doc(productId).snapshotChanges().pipe(
            map(snaps => convertSnapsDoc<ShoppingCartItem>(snaps)),
            first()
        );
    }
}
