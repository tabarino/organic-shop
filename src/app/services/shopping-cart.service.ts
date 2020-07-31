import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
    providedIn: 'root'
})
export class ShoppingCartService {
    constructor(private db: AngularFirestore) {
    }

    add(): Promise<any> {
        return this.db.collection('shopping-carts').add({ dateCreated: new Date().getTime() });
    }
}
