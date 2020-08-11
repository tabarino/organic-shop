import { Component, Input, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Observable } from 'rxjs';
import { Category } from '@shared/models/category';

@Component({
    selector: 'product-filter',
    templateUrl: './product-filter.component.html',
    styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {
    categories$: Observable<Category[]>;

    @Input()
    categoryId: string;

    constructor(private categoryService: CategoryService) {
    }

    ngOnInit(): void {
        this.categories$ = this.categoryService.getAll();
    }
}
