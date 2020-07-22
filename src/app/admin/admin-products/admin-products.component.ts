import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';

@Component({
    selector: 'app-admin-products',
    templateUrl: './admin-products.component.html',
    styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
    products$: Observable<Product[]>;

    constructor(private productService: ProductService) {
        this.products$ = this.productService.getAll();
    }

    ngOnInit(): void {
    }
}
