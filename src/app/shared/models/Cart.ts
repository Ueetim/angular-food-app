import { CartItem } from "./cartItem";

export class Cart {
  // cart contains a list (array) of cartItemss
  items:CartItem[] = [];

  get totalPrice(): number {
    let totalPrice = 0;

    // total price for each item and add to give total price
    this.items.forEach(item=>{
      totalPrice += item.price;
    });
    return totalPrice;
  }
}
