import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Observable } from 'rxjs';
import { Category } from '../../models/category';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../models/product';

@Component({
    selector: 'app-product-form',
    templateUrl: './product-form.component.html',
    styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
    categories$: Observable<Category[]>;
    product: Product = {
        id: null,
        title: null,
        category: null,
        price: null,
        imageUrl: null
    };

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private categoryService: CategoryService,
        private productService: ProductService
    ) {
        this.categories$ = this.categoryService.getCategories();

        const productId = this.route.snapshot.paramMap.get('id');
        if (productId) {
            this.productService.getById(productId).subscribe(product => this.product = product);
        }
    }

    ngOnInit(): void {
    }

    save(product): void {
        this.productService.add(product);
        this.router.navigate(['/admin/products']);
    }
}
