import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsNavbarComponent } from './components/bs-navbar/bs-navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CoreRoutingModule } from './core-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [
        BsNavbarComponent,
        HomeComponent,
        LoginComponent
    ],
    exports: [
        BsNavbarComponent
    ],
    imports: [
        CommonModule,
        NgbModule,
        SharedModule,
        CoreRoutingModule
    ]
})
export class CoreModule { }
