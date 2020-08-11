import { Component, Input, OnInit } from '@angular/core';
import { Product } from '@shared/models/product';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { ShoppingCart } from '@shared/models/shopping-cart';

@Component({
    selector: 'product-card',
    templateUrl: './product-card.component.html',
    styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
    @Input()
    product: Product;

    @Input()
    showActions = true;

    @Input()
    shoppingCart: ShoppingCart;

    constructor(private cartService: ShoppingCartService) {
    }

    ngOnInit(): void {
    }

    addToCart(): void {
        this.cartService.addToCart(this.product);
    }
}
