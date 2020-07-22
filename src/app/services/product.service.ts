import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { convertSnaps } from './db-utils';
import { first, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    constructor(private db: AngularFirestore) {
    }

    add(product): Promise<any> {
        return this.db.collection('products').add(product);
    }

    getAll(): Observable<Product[]> {
        return this.db.collection(
            'products', ref => ref.orderBy('title')
        ).snapshotChanges().pipe(
            map(snaps => convertSnaps<Product>(snaps)),
            first()
        );
    }
}
