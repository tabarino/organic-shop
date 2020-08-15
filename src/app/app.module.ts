import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AdminModule } from '@admin/admin.module';
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';
import { ShoppingModule } from '@shopping/shopping.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AngularFireModule.initializeApp(environment.firebase),
        AdminModule,
        CoreModule,
        SharedModule,
        ShoppingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
