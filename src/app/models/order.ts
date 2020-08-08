import { Shipping } from './shipping';
import { OrderItem } from './order-item';

export interface Order {
    id?: string;
    datePlaced: number;
    shipping: Shipping;
    items: OrderItem[];
}
