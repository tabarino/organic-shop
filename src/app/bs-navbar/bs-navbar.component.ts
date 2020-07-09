import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';

@Component({
    selector: 'bs-navbar',
    templateUrl: './bs-navbar.component.html',
    styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
    user: firebase.User;

    constructor(private afAuth: AngularFireAuth) {
        this.afAuth.authState.subscribe(user => this.user = user);
    }

    ngOnInit(): void {
    }

    logout(): void {
        this.afAuth.signOut();
    }
}
