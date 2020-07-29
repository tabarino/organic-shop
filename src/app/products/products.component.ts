import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
    products: Product[] = [];
    filteredProducts: Product[] = [];
    categories$: Observable<Category[]>;
    categoryId: string;

    constructor(
        private route: ActivatedRoute,
        private productService: ProductService,
        private categoryService: CategoryService
    ) {
    }

    ngOnInit(): void {
        this.categories$ = this.categoryService.getAll();
        this.productService.getAll().subscribe(products => this.products = products);

        this.route.queryParamMap.subscribe(params => {
            this.categoryId = params.get('categoryId');

            if (this.categoryId) {
                this.filteredProducts = this.products.filter(products => products.category === this.categoryId);
            } else {
                this.filteredProducts = this.products;
            }
        });
    }
}
