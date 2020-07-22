import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { convertSnaps, convertSnapsDoc } from './db-utils';
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

    getById(productId: string): Observable<Product> {
        return this.db.doc(`products/${productId}`).snapshotChanges().pipe(
            map(snaps => convertSnapsDoc<Product>(snaps)),
            first()
        );
    }
}
