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
import { LoginComponent } from '@core/components/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { SharedModule } from '@shared/shared.module';
import { AdminModule } from '@admin/admin.module';
import { ShoppingModule } from '@shopping/shopping.module';

@NgModule({
    declarations: [
        AppComponent,
        BsNavbarComponent,
        HomeComponent,
        LoginComponent,
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
        SharedModule,
        AdminModule,
        ShoppingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
