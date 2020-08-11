import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '@shared/models/product';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { ShoppingCart } from '@shared/models/shopping-cart';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
    products: Product[] = [];
    filteredProducts: Product[] = [];
    categoryId: string;
    shoppingCart$: Observable<ShoppingCart>;

    constructor(
        private route: ActivatedRoute,
        private productService: ProductService,
        private cartService: ShoppingCartService
    ) {
    }

    async ngOnInit(): Promise<void> {
        this.shoppingCart$ = await this.cartService.getCart();
        this.populateProducts();
    }

    private populateProducts(): void {
        this.productService.getAll().pipe(
            switchMap(products => {
                this.products = products;
                return this.route.queryParamMap;
            }),
        ).subscribe(params => {
            this.categoryId = params.get('categoryId');
            this.applyFilter();
        });
    }

    private applyFilter(): void {
        if (this.categoryId) {
            this.filteredProducts = this.products.filter(products => products.category === this.categoryId);
        } else {
            this.filteredProducts = this.products;
        }
    }
}
