import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { first, map } from 'rxjs/operators';
import { convertSnaps } from './db-utils';
import { Category } from '../models/category';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CategoryService {
    constructor(private db: AngularFirestore) {
    }

    getCategories(): Observable<Category[]> {
        return this.db.collection(
            'categories', ref => ref.orderBy('name')
        ).snapshotChanges().pipe(
            map(snaps => convertSnaps<Category>(snaps)),
            first() // This gets only once from firestore, it does not change every time other user changes the record
        );
    }
}
