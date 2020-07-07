import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
    selector: 'bs-navbar',
    templateUrl: './bs-navbar.component.html',
    styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
    constructor(private afAuth: AngularFireAuth) {
    }

    ngOnInit(): void {
    }

    logout(): void {
        this.afAuth.signOut();
    }
}
