import { NgModule } from '@angular/core';
import { ProductsComponent } from './components/products/products.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { ProductFilterComponent } from './components/products/product-filter/product-filter.component';
import { ShoppingCartSummaryComponent } from './components/shopping-cart-summary/shopping-cart-summary.component';
import { ShippingFormComponent } from './components/shipping-form/shipping-form.component';
import { ShoppingRoutingModule } from './shopping-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        CheckOutComponent,
        MyOrdersComponent,
        OrderSuccessComponent,
        ProductsComponent,
        ProductFilterComponent,
        ShippingFormComponent,
        ShoppingCartComponent,
        ShoppingCartSummaryComponent,
    ],
    imports: [
        ShoppingRoutingModule,
        SharedModule
    ]
})
export class ShoppingModule { }
