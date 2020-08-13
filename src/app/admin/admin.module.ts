import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
    declarations: [
        AdminProductsComponent,
        AdminOrdersComponent,
        ProductFormComponent
    ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        FormsModule,
        SharedModule
    ]
})
export class AdminModule { }
