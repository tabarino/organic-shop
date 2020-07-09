import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';

@Component({
    selector: 'bs-navbar',
    templateUrl: './bs-navbar.component.html',
    styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
    user$: Observable<firebase.User>;

    constructor(private afAuth: AngularFireAuth) {
        this.user$ =  this.afAuth.authState;
    }

    ngOnInit(): void {
    }

    logout(): void {
        this.afAuth.signOut();
    }
}
