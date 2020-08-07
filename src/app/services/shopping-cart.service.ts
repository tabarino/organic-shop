import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from '../models/product';
import { first, map } from 'rxjs/operators';
import { convertSnapsDoc, convertSnapsDocItems } from './db-utils';
import { ShoppingCartItem } from '../models/shopping-cart-item';
import { Observable } from 'rxjs';
import { ShoppingCart } from '../models/shopping-cart';

@Injectable({
    providedIn: 'root'
})
export class ShoppingCartService {
    constructor(private db: AngularFirestore) {
    }

    addToCart(product: Product): void {
        this.updateItem(product, 1);
    }

    removeFromCart(product: Product): void {
        this.updateItem(product, -1);
    }

    async clearCart(items: ShoppingCartItem[]): Promise<void> {
        const cartId = await this.getOrCreateCartId();
        items.forEach(item => {
            this.db.doc(`shopping-carts/${ cartId }`).collection('items').doc(item.id).delete();
        });
    }

    async getCart(): Promise<Observable<ShoppingCart>> {
        const cartId = await this.getOrCreateCartId();
        return this.db.doc(`shopping-carts/${ cartId }`).collection('items').snapshotChanges().pipe(
            map(snaps => {
                const items = convertSnapsDocItems<ShoppingCartItem>(snaps);
                return new ShoppingCart(items);
            })
        );
    }

    private async updateItem(product: Product, change: number): Promise<void> {
        const cartId = await this.getOrCreateCartId();
        const item$ = this.getCartItem(cartId, product.id);
        item$.subscribe(item => {
            let quantity = 1;
            if (item) {
                quantity = item.quantity + change;
            }

            if (quantity === 0) {
                this.db.doc(`shopping-carts/${ cartId }`).collection('items').doc(product.id).delete();
            } else {
                this.db.doc(`shopping-carts/${ cartId }`).collection('items').doc(product.id).set({
                    title: product.title,
                    price: product.price,
                    imageUrl: product.imageUrl,
                    quantity
                });
            }
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
