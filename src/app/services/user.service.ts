import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(private db: AngularFirestore) {
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
