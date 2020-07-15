import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    constructor(private db: AngularFirestore) {
    }

    add(product): Promise<any> {
        return this.db.collection('products').add(product);
    }
}
