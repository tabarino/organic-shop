import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '@shared/services/shopping-cart.service';
import { Observable } from 'rxjs';
import { ShoppingCart } from '@shared/models/shopping-cart';

@Component({
    selector: 'app-shopping-cart',
    templateUrl: './shopping-cart.component.html',
    styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
    cart$: Observable<ShoppingCart>;

    constructor(private cartService: ShoppingCartService) {
    }

    async ngOnInit(): Promise<void> {
        this.cart$ = await this.cartService.getCart();
    }

    clearCart(cart: ShoppingCart): void {
        this.cartService.clearCart(cart.items);
    }
}
