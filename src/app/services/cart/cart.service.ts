import { Injectable } from '@angular/core';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/cartItem';
import { Food } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart:Cart = new Cart();

  cartLength:number = 0;

  constructor() { }

  addToCart(food: Food):void{
    // check if food already exists in cart
    let cartItem = this.cart.items.find(item=>item.food.id === food.id);
    if (cartItem) {
      this.changeQuantity(food.id, cartItem.quantity + 1);
      return;
    }

    // if food doesnt exist
    this.cart.items.push(new CartItem(food));
    this.cartLength++;
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  removeFromCart(foodId:number): void {
    this.cart.items = this.cart.items.filter(item => item.food.id != foodId);
    this.cartLength--;
  }

  changeQuantity(foodId:number, quantity:number){
    let cartItem = this.cart.items.find(item => item.food.id === foodId);
    if (!cartItem) return;
    cartItem.quantity = quantity;
  }

  getCart():Cart{
    return this.cart;
  }

  clearCart(){
    this.cart = new Cart();
    return this.cart;
  }
}
