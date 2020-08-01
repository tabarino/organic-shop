import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { convertSnapsDoc } from './db-utils';
import { ShoppingCart } from '../models/shopping-cart';

@Injectable({
    providedIn: 'root'
})
export class ShoppingCartService {
    shoppingCart: ShoppingCart = {
        id: null,
        dateCreated: null
    };

    constructor(private db: AngularFirestore) {
    }

    private async getOrCreateCart(): Promise<Observable<ShoppingCart>> {
        const cartId = localStorage.getItem('cartId');
        if (!cartId) {
            const result = await this.create();
            localStorage.setItem('cartId', result.id);
            return this.getCart(result.id);
        }

        return this.getCart(cartId);
    }

    private getCart(cartId: string): Observable<ShoppingCart> {
        return this.db.doc(`products/${cartId}`).snapshotChanges().pipe(
            map(snaps => convertSnapsDoc<ShoppingCart>(snaps)),
            first()
        );
    }

    private create(): Promise<any> {
        this.shoppingCart.dateCreated = new Date().getTime();
        return this.db.collection('shopping-carts').add(this.shoppingCart);
    }
}
