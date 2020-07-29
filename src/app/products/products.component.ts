import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
    products$: Observable<Product[]>;
    categories$: Observable<Category[]>;

    constructor(
        private productService: ProductService,
        private categoryService: CategoryService
    ) {
    }

    ngOnInit(): void {
        this.products$ = this.productService.getAll();
        this.categories$ = this.categoryService.getAll();
    }
}
