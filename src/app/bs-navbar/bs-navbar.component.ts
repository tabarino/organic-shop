import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AppUser } from '../models/app-user';

@Component({
    selector: 'bs-navbar',
    templateUrl: './bs-navbar.component.html',
    styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
    appUser: AppUser;

    constructor(private authService: AuthService) {
        this.authService.appUser$.subscribe(appUser => this.appUser = appUser);
    }

    ngOnInit(): void {
    }

    logout(): void {
        this.authService.logout();
    }
}
