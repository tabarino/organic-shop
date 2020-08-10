import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order';
import { Observable } from 'rxjs';
import { OrderService } from 'src/app/services/order.service';

@Component({
    selector: 'app-admin-orders',
    templateUrl: './admin-orders.component.html',
    styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {
    orders$: Observable<Order[]>;

    constructor(private orderService: OrderService) {
    }

    ngOnInit(): void {
        this.orders$ = this.orderService.getAll();
    }
}
