import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ShoppingCartService } from '../services/shopping-cart.service';

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

    constructor(private cartService: ShoppingCartService) {
    }

    ngOnInit(): void {
    }

    addToCart(product: Product): void {

    }
}
