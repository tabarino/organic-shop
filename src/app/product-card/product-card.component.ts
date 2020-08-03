import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { ShoppingCartItem } from '../models/shopping-cart-item';

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
    shoppingCart: ShoppingCartItem[];

    constructor(private cartService: ShoppingCartService) {
    }

    ngOnInit(): void {
    }

    addToCart(product: Product): void {
        this.cartService.addToCart(product);
    }

    getQuantity(): number {
        if (!this.shoppingCart) {
            return 0;
        }

        const cartItem = this.shoppingCart.filter(item => item.product.id === this.product.id).shift();
        return cartItem ? cartItem.quantity : 0;
    }
}
