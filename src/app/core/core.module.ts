import { NgModule } from '@angular/core';
import { BsNavbarComponent } from './components/bs-navbar/bs-navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CoreRoutingModule } from './core-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        BsNavbarComponent,
        HomeComponent,
        LoginComponent
    ],
    imports: [
        CoreRoutingModule,
        SharedModule
    ],
    exports: [
        BsNavbarComponent
    ],
})
export class CoreModule { }
