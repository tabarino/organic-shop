import { ShoppingCartItem } from './shopping-cart-item';

export interface ShoppingCart {
    id: string;
    dateCreated: number;
    items: ShoppingCartItem[];
}
