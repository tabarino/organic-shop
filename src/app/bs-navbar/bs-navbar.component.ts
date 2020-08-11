import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AppUser } from '@shared/models/app-user';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { Observable } from 'rxjs';
import { ShoppingCart } from '@shared/models/shopping-cart';

@Component({
    selector: 'bs-navbar',
    templateUrl: './bs-navbar.component.html',
    styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
    appUser: AppUser;
    cart$: Observable<ShoppingCart>;

    constructor(private authService: AuthService, private cartService: ShoppingCartService) {
    }

    async ngOnInit(): Promise<void> {
        this.authService.appUser$.subscribe(appUser => this.appUser = appUser);
        this.cart$ = await this.cartService.getCart();
    }

    logout(): void {
        this.authService.logout();
    }
}
