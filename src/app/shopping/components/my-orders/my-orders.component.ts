import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '@shared/models/order';
import { AuthService } from '@shared/services/auth.service';
import { OrderService } from '@shared/services/order.service';
import { switchMap } from 'rxjs/operators';

@Component({
    selector: 'my-orders',
    templateUrl: './my-orders.component.html',
    styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
    orders$: Observable<Order[]>;

    constructor(
        private authService: AuthService,
        private orderService: OrderService
    ) {
    }

    ngOnInit(): void {
        this.orders$ = this.authService.user$.pipe(
            switchMap(user => this.orderService.getOrderByUser(user.uid))
        );
    }
}
