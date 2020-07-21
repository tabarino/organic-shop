import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Observable } from 'rxjs';
import { Category } from '../../models/category';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-product-form',
    templateUrl: './product-form.component.html',
    styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
    categories$: Observable<Category[]>;

    constructor(
        private router: Router,
        private categoryService: CategoryService,
        private productService: ProductService
    ) {
        this.categories$ = this.categoryService.getCategories();
    }

    ngOnInit(): void {
    }

    save(product): void {
        this.productService.add(product);
        this.router.navigate(['/admin/products']);
    }
}
