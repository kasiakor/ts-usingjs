import {Product, SportProducts} from "./product";

class CartItem {
    constructor(public product: SportProducts, public quantity: number) {

    }

    get totalPrice(): number {
        return this.product.price * this.quantity;
    }
}

export class Cart {
    private items = new Map<number, CartItem>();
    constructor(public customerName: string) {}

    //return quantity
    addProduct(product: SportProducts, quantity: number): number {
        if(this.items.has(product.id)) {
            let item = this.items.get(product.id);
            item.quantity += quantity;
            return item.quantity;
        }
        else {
            this.items.set(product.id, new CartItem(product, quantity));
            return quantity;
        }
    }

    get totalPrice(): number {
        return [...this.items.values()].reduce((total, item) => 
        total += item.totalPrice, 0)
    }

    get itemCount(): number {
        return [...this.items.values()].reduce((total, item) => 
        total += item.quantity, 0)
    }
}