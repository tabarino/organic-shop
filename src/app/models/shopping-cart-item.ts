export class ShoppingCartItem {
    id: string;
    title: string;
    price: number;
    imageUrl: string;
    quantity: number;

    constructor(init?: Partial<ShoppingCartItem>) {
        Object.assign(this, init);
    }

    get totalPrice(): number {
        return this.price * this.quantity;
    }
}
