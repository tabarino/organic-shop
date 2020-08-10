import { Component, OnInit, OnDestroy } from '@angular/core';
import { Shipping } from '.././models/shipping';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { Subscription } from 'rxjs';
import { ShoppingCart } from '../models/shopping-cart';
import { OrderService } from '../services/order.service';
import { Order } from '../models/order';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-check-out',
    templateUrl: './check-out.component.html',
    styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit, OnDestroy {
    userId: string;
    cart: ShoppingCart;
    cartSubscription: Subscription;
    userSubscription: Subscription;
    shipping: Shipping = {
        name: null,
        address: null,
        city: null,
        postcode: null
    };

    constructor(
        private authService: AuthService,
        private cartService: ShoppingCartService,
        private orderService: OrderService,
        private router: Router
    ) {
    }

    async ngOnInit(): Promise<void> {
        const cart$ = await this.cartService.getCart();
        this.cartSubscription = cart$.subscribe(cart => this.cart = cart);
        this.userSubscription = this.authService.user$.subscribe(user => this.userId = user.uid);
    }

    async placeOrder(): Promise<void> {
        const order = new Order(this.userId, this.shipping, this.cart);
        const result = await this.orderService.storeOrder({ ...order });

        this.router.navigate(['/order-success', result.id]);
    }

    ngOnDestroy(): void {
        this.cartSubscription.unsubscribe();
        this.userSubscription.unsubscribe();
    }
}
