import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    user$: Observable<firebase.User>;

    constructor(private afAuth: AngularFireAuth) {
        this.user$ =  this.afAuth.authState;
    }

    login(): void {
        const provider = new firebase.auth.GoogleAuthProvider();
        this.afAuth.signInWithRedirect(provider);
    }

    logout(): void {
        this.afAuth.signOut();
    }
}
