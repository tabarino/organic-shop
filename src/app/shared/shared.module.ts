import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductQuantityComponent } from './components/product-quantity/product-quantity.component';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
    declarations: [
        ProductCardComponent,
        ProductQuantityComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        CustomFormsModule,
        NgbModule,
        AngularFireAuthModule,
        AngularFirestoreModule
    ],
    exports: [
        ProductCardComponent,
        ProductQuantityComponent,
        CommonModule,
        FormsModule,
        CustomFormsModule,
        NgbModule,
        AngularFireAuthModule,
        AngularFirestoreModule
    ]
})
export class SharedModule { }
