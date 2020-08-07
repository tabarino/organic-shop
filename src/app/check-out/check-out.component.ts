import { Component, OnInit } from '@angular/core';
import { Shipping } from '.././models/shipping';

@Component({
    selector: 'app-check-out',
    templateUrl: './check-out.component.html',
    styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
    shipping: Shipping = {
        id: null,
        name: null,
        address: null,
        city: null,
        postcode: null
    };

    constructor() { }

    ngOnInit(): void {
    }

    placeOrder(): void {
        console.log(this.shipping);
    }
}
