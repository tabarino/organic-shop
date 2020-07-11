import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    user$: Observable<firebase.User>;

    constructor(private afAuth: AngularFireAuth, private router: Router) {
        this.user$ =  this.afAuth.authState;
    }

    login(): void {
        const provider = new firebase.auth.GoogleAuthProvider();
        this.afAuth.signInWithRedirect(provider);
    }

    logout(): void {
        this.afAuth.signOut().then(() => {
            this.router.navigateByUrl('/');
        });
    }
}
