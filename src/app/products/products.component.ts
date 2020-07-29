import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
    products: Product[] = [];
    filteredProducts: Product[] = [];
    categoryId: string;

    constructor(
        private route: ActivatedRoute,
        private productService: ProductService
    ) {
    }

    ngOnInit(): void {
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
}
