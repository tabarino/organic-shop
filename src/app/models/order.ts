import { Shipping } from './shipping';
import { OrderItem } from './order-item';
import { ShoppingCart } from './shopping-cart';

export class Order {
    id?: string;
    datePlaced: number;
    items: OrderItem[];

    constructor(public userId: string, public shipping: Shipping, shoppingCart: ShoppingCart) {
        this.datePlaced = new Date().getTime();
        this.items = shoppingCart.items.map(item => {
            return {
                title: item.title,
                imageUrl: item.imageUrl,
                price: item.price,
                quantity: item.quantity,
                totalPrice: item.totalPrice
            };
        });
    }
}
