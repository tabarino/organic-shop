import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { map } from 'rxjs/operators';
import { AppUser } from '@shared/models/app-user';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(private db: AngularFirestore) {
    }

    get(uid: string): Observable<AppUser> {
        return this.db.collection('users').doc(uid).snapshotChanges().pipe(
            map(snap => {
                return {
                    id: snap.payload.id,
                    ...snap.payload.data() as AppUser
                };
            })
        );
    }

    save(user: firebase.User): void {
        this.db.doc(`users/${ user.uid }`).set(
            {
                name: user.displayName,
                email: user.email
            },
            { merge: true }
        );
    }
}
