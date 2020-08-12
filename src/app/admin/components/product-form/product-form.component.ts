import { Component, OnInit } from '@angular/core';
import { CategoryService } from '@shared/services/category.service';
import { Observable } from 'rxjs';
import { Category } from '@shared/models/category';
import { ProductService } from '@shared/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '@shared/models/product';

@Component({
    selector: 'app-product-form',
    templateUrl: './product-form.component.html',
    styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
    categories$: Observable<Category[]>;
    productId: string;
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
        this.categories$ = this.categoryService.getAll();

        this.productId = this.route.snapshot.paramMap.get('id');
        if (this.productId) {
            this.productService.getById(this.productId).subscribe(product => this.product = product);
        }
    }

    ngOnInit(): void {
    }

    save(product): void {
        if (this.productId) {
            this.productService.update(this.productId, product);
        } else {
            this.productService.add(product);
        }

        this.router.navigate(['/admin/products']);
    }

    cancel(): void {
        this.router.navigate(['/admin/products']);
    }

    delete(): void {
        if (confirm('Are you sure you would like to delete this product?')) {
            this.productService.delete(this.productId);
            this.router.navigate(['/admin/products']);
        }
    }
}
