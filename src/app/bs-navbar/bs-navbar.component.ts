import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'bs-navbar',
    templateUrl: './bs-navbar.component.html',
    styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
    constructor(public authService: AuthService) {
    }

    ngOnInit(): void {
    }

    logout(): void {
        this.authService.logout();
    }
}
