import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AppUser } from '../models/app-user';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
    selector: 'bs-navbar',
    templateUrl: './bs-navbar.component.html',
    styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
    appUser: AppUser;
    shoppingCartItemCount: number;

    constructor(private authService: AuthService, private cartService: ShoppingCartService) {
    }

    async ngOnInit(): Promise<void> {
        this.authService.appUser$.subscribe(appUser => this.appUser = appUser);
        const cart$ = await this.cartService.getCart();
        cart$.subscribe(shoppingCart => {
            this.shoppingCartItemCount = 0;
            for (const item of shoppingCart) {
                this.shoppingCartItemCount += item.quantity;
            }
        });
    }

    logout(): void {
        this.authService.logout();
    }
}
