import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { Cart } from '../shared/models/Cart';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // cart:Cart;
  cartLength!:number;

  constructor(private cartService: CartService) {
    // this.cart = this.cartService.getCart();
    // this.cartLength = this.cart.items.length;
    this.cartLength = cartService.cartLength;
  }


  ngOnInit(): void {
  }

}
