import { Component, Input, OnInit } from '@angular/core';
import { Product } from '@shared/models/product';
import { ShoppingCart } from '@shared/models/shopping-cart';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
    selector: 'product-quantity',
    templateUrl: './product-quantity.component.html',
    styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent implements OnInit {
    @Input()
    product: Product;

    @Input()
    shoppingCart: ShoppingCart;

    constructor(private cartService: ShoppingCartService) {
    }

    ngOnInit(): void {
    }

    addToCart(): void {
        this.cartService.addToCart(this.product);
    }

    removeFromCart(): void {
        this.cartService.removeFromCart(this.product);
    }
}
