import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-admin-products',
    templateUrl: './admin-products.component.html',
    styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {
    products: Product[];
    filteredProducts: Product[];
    subscription: Subscription;

    constructor(private productService: ProductService) {
    }

    ngOnInit(): void {
        this.subscription = this.productService.getAll()
            .subscribe(products => this.filteredProducts = this.products = products);
    }

    filter(query: string): void {
        if (query) {
            this.filteredProducts = this.products.filter(product => {
                return product.title.toLowerCase().includes(query.toLowerCase());
            });
            return;
        }

        this.filteredProducts = this.products;
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
