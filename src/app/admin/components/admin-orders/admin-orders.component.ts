import { Component, OnInit } from '@angular/core';
import { Order } from '@shared/models/order';
import { Observable } from 'rxjs';
import { OrderService } from '@shared/services/order.service';

@Component({
    selector: 'admin-orders',
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
