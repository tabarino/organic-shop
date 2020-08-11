import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Product } from '@shared/models/product';
import { convertSnaps, convertSnapsDoc } from './db-utils';
import { first, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    constructor(private db: AngularFirestore) {
    }

    add(product: Product): Promise<any> {
        return this.db.collection('products').add(product);
    }

    /**
     * Get All
     * The first item always returns the cached list
     * According to some articles, it seems to be a bug on Firebase
     * That's the reason to be using take(2)
     *
     * Not using the take(2) here anymore, because we are unsubscribring later
     */
    getAll(): Observable<Product[]> {
        return this.db.collection(
            'products', ref => ref.orderBy('title')
        ).snapshotChanges().pipe(
            map(snaps => convertSnaps<Product>(snaps))
        );
    }

    getById(productId: string): Observable<Product> {
        return this.db.doc(`products/${productId}`).snapshotChanges().pipe(
            map(snaps => convertSnapsDoc<Product>(snaps)),
            first()
        );
    }

    update(productId: string, product: Product): void {
        this.db.doc(`products/${ productId }`).update(product);
    }

    delete(productId: string): void {
        this.db.doc(`products/${productId}`).delete();
    }
}
