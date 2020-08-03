import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { ShoppingCartItem } from '../models/shopping-cart-item';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
    products: Product[] = [];
    filteredProducts: Product[] = [];
    categoryId: string;
    shoppingCart: ShoppingCartItem[];
    shoppingCartSubscription: Subscription;

    constructor(
        private route: ActivatedRoute,
        private productService: ProductService,
        private cartService: ShoppingCartService
    ) {
        this.productService.getAll().pipe(
            switchMap(products => {
                this.products = products;
                return this.route.queryParamMap;
            }),
        ).subscribe(params => {
            this.categoryId = params.get('categoryId');

            if (this.categoryId) {
                this.filteredProducts = this.products.filter(products => products.category === this.categoryId);
            } else {
                this.filteredProducts = this.products;
            }
        });
    }

    async ngOnInit(): Promise<void> {
        this.shoppingCartSubscription = (await this.cartService.getCart())
            .subscribe(shoppingCart => {
                return this.shoppingCart = shoppingCart;
            });
    }

    ngOnDestroy(): void {
        this.shoppingCartSubscription.unsubscribe();
    }
}
