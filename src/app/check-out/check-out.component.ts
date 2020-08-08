import { Component, OnInit, OnDestroy } from '@angular/core';
import { Shipping } from '.././models/shipping';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { Subscription } from 'rxjs';
import { ShoppingCart } from '../models/shopping-cart';
import { OrderService } from '../services/order.service';
import { Order } from '../models/order';
import { OrderItem } from '../models/order-item';

@Component({
    selector: 'app-check-out',
    templateUrl: './check-out.component.html',
    styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit, OnDestroy {
    cart: ShoppingCart;
    subscription: Subscription;
    shipping: Shipping = {
        name: null,
        address: null,
        city: null,
        postcode: null
    };

    constructor(
        private cartService: ShoppingCartService,
        private orderService: OrderService
    ) {
    }

    async ngOnInit(): Promise<void> {
        const cart$ = await this.cartService.getCart();
        this.subscription = cart$.subscribe(cart => this.cart = cart);
    }

    placeOrder(): void {
        const orderItems = this.getOrderItems();
        const order: Order = {
            datePlaced: new Date().getTime(),
            shipping: this.shipping,
            items: orderItems
        };

        this.orderService.storeOrder(order);
    }

    private getOrderItems(): OrderItem[] {
        return this.cart.items.map(item => {
            return {
                title: item.title,
                imageUrl: item.imageUrl,
                price: item.price,
                quantity: item.quantity,
                totalPrice: item.totalPrice
            };
        });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
