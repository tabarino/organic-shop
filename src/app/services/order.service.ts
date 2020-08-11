import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Order } from '@shared/models/order';
import { ShoppingCartService } from './shopping-cart.service';
import { ShoppingCart } from '@shared/models/shopping-cart';
import { Observable } from 'rxjs';
import { convertSnaps } from './db-utils';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class OrderService {
    constructor(
        private db: AngularFirestore,
        private cartService: ShoppingCartService) {
    }

    /**
     * Get All
     * The first item always returns the cached list
     * According to some articles, it seems to be a bug on Firebase
     * That's the reason to be using take(2)
     *
     * Not using the take(2) here anymore, because we are unsubscribring later
     */
    getAll(): Observable<Order[]> {
        return this.db.collection(
            'orders', ref => ref.orderBy('datePlaced')
        ).snapshotChanges().pipe(
            map(snaps => convertSnaps<Order>(snaps)),
        );
    }

    getOrderByUser(userId: string): Observable<Order[]> {
        return this.db.collection(
            'orders', ref => ref.where('userId', '==', userId).orderBy('datePlaced', 'desc')
        ).snapshotChanges().pipe(
            map(snaps => convertSnaps<Order>(snaps)),
        );
    }

    async placeOrder(order: Order, cart: ShoppingCart): Promise<any> {
        const result = await this.db.collection('orders').add(order);

        if (result.id) {
            this.cartService.clearCart(cart.items);
        }

        return result;
    }
}
