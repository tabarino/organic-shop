import { ShoppingCartItem } from './shopping-cart-item';

export class ShoppingCart {
    items: ShoppingCartItem[] = [];

    constructor(public itemsMap: ShoppingCartItem[]) {
        for (const item of itemsMap) {
            this.items.push(new ShoppingCartItem(item.product, item.quantity));
        }
    }

    get totalItemsCount(): number {
        let count = 0;
        for (const item of this.items) {
            count += item.quantity;
        }
        return count;
    }

    get totalPrice(): number {
        let sum = 0;
        for (const item of this.items) {
            sum += item.totalPrice;
        }
        return sum;
    }
}
