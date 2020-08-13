import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { BsNavbarComponent } from '@core/components/bs-navbar/bs-navbar.component';
import { HomeComponent } from '@core/components/home/home.component';
import { ProductsComponent } from '@shopping/components/products/products.component';
import { ShoppingCartComponent } from '@shopping/components/shopping-cart/shopping-cart.component';
import { CheckOutComponent } from '@shopping/components/check-out/check-out.component';
import { OrderSuccessComponent } from '@shopping/components/order-success/order-success.component';
import { MyOrdersComponent } from '@shopping/components/my-orders/my-orders.component';
import { AdminProductsComponent } from '@admin/components/admin-products/admin-products.component';
import { AdminOrdersComponent } from '@admin/components/admin-orders/admin-orders.component';
import { LoginComponent } from '@core/components/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductFormComponent } from '@admin/components/product-form/product-form.component';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { ProductFilterComponent } from '@shopping/components/products/product-filter/product-filter.component';
import { ShoppingCartSummaryComponent } from '@shopping/components/shopping-cart-summary/shopping-cart-summary.component';
import { ShippingFormComponent } from '@shopping/components/shipping-form/shipping-form.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
    declarations: [
        AppComponent,
        BsNavbarComponent,
        HomeComponent,
        ProductsComponent,
        ShoppingCartComponent,
        CheckOutComponent,
        OrderSuccessComponent,
        MyOrdersComponent,
        AdminProductsComponent,
        AdminOrdersComponent,
        LoginComponent,
        ProductFormComponent,
        ProductFilterComponent,
        ShoppingCartSummaryComponent,
        ShippingFormComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
        AngularFirestoreModule,
        NgbModule,
        FormsModule,
        CustomFormsModule,
        SharedModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
