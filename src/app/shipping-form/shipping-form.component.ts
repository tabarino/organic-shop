import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Order } from '../models/order';
import { Shipping } from '../models/shipping';
import { AuthService } from '../services/auth.service';
import { OrderService } from '../services/order.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ShoppingCart } from '../models/shopping-cart';

@Component({
    selector: 'shipping-form',
    templateUrl: './shipping-form.component.html',
    styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit, OnDestroy {
    @Input()
    cart: ShoppingCart;

    userId: string;
    userSubscription: Subscription;
    shipping: Shipping = {
        name: null,
        address: null,
        city: null,
        postcode: null
    };

    constructor(
        private authService: AuthService,
        private orderService: OrderService,
        private router: Router
    ) {
    }

    ngOnInit(): void {
        this.userSubscription = this.authService.user$.subscribe(user => this.userId = user.uid);
    }

    async placeOrder(): Promise<void> {
        const order = new Order(this.userId, this.shipping, this.cart);
        const result = await this.orderService.placeOrder({ ...order }, this.cart);

        this.router.navigate(['/order-success', result.id]);
    }

    ngOnDestroy(): void {
        this.userSubscription.unsubscribe();
    }
}
