import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { AppUser } from '../models/app-user';
import { switchMap } from 'rxjs/operators';
import { UserService } from './user.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    user$: Observable<firebase.User>;

    constructor(
        private afAuth: AngularFireAuth,
        private router: Router,
        private userService: UserService
    ) {
        this.user$ =  this.afAuth.authState;
    }

    get appUser$(): Observable<AppUser> {
        return this.user$.pipe(
            switchMap(user => {
                if (user) {
                    return this.userService.get(user.uid);
                }
                return of(null);
            })
        );
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
