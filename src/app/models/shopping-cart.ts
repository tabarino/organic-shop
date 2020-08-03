import { ShoppingCartItem } from './shopping-cart-item';

export class ShoppingCart {
    constructor(public items: ShoppingCartItem[]) {
    }

    get totalItemsCount(): number {
        let count = 0;
        for (const item of this.items) {
            count += item.quantity;
        }
        return count;
    }
}
