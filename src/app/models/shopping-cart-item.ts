export class ShoppingCartItem {
    id: string;
    title: string;
    price: number;
    imageUrl: string;
    quantity: number;

    get totalPrice(): number {
        return this.price * this.quantity;
    }
}
