import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Order } from '../models/order';

@Injectable({
    providedIn: 'root'
})
export class OrderService {
    constructor(private db: AngularFirestore) {
    }

    storeOrder(order: Order): Promise<any> {
        return this.db.collection('orders').add(order);
    }
}
