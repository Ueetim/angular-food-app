import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/cartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  cart!: Cart;

  totalPrice!: number;

  cartLength: any;

  constructor(private cartService: CartService) {
    this.setCart();

    this.cartLength = localStorage.getItem('itemsLength');
  }

  ngOnInit(): void {

  }

  setCart(){
    this.cart = this.cartService.getCart();
    this.total();
  }

  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart(); // refresh the cart
    this.cartLength = localStorage.getItem('itemsLength');
  }

  changeQuantity(cartItem:CartItem, quantityInString:string) {
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
    this.setCart();
  }

  clearCart(){
    this.cart = this.cartService.clearCart();
    this.cartLength = localStorage.getItem('itemsLength');
  }

  total() {
    this.totalPrice = this.cartService.totalPrice();
  }
}
