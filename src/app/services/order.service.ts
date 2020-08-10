import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Order } from '../models/order';
import { ShoppingCartService } from './shopping-cart.service';
import { ShoppingCart } from '../models/shopping-cart';

@Injectable({
    providedIn: 'root'
})
export class OrderService {
    constructor(
        private db: AngularFirestore,
        private cartService: ShoppingCartService) {
    }

    async placeOrder(order: Order, cart: ShoppingCart): Promise<any> {
        const result = await this.db.collection('orders').add(order);

        if (result.id) {
            this.cartService.clearCart(cart.items);
        }

        return result;
    }
}
