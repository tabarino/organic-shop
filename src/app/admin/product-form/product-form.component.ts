import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Observable } from 'rxjs';
import { Category } from '../../models/category';

@Component({
    selector: 'app-product-form',
    templateUrl: './product-form.component.html',
    styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
    categories$: Observable<Category[]>;

    constructor(private categoryService: CategoryService) {
        this.categories$ = this.categoryService.getCategories();
    }

    ngOnInit(): void {
    }
}
