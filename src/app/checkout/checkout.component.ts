import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { Cart } from '../shared/models/Cart';
import { UntypedFormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {


  items: Cart;
  total: number;

  checkoutForm = this.formBuilder.group({
    name: '',
    email: '',
    address: '',
    method: ''
  });

  constructor(public cartService: CartService,
    private formBuilder: UntypedFormBuilder,
    private router: Router,
    private toast:NgToastService) {
    this.items = this.cartService.getCart();

    this.total = this.cartService.totalPrice();


  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    // Process checkout data here
    // console.warn('Your order has been submitted', this.checkoutForm.value.name);
    this.cartService.cart = new Cart;
    this.cartService.cartLength = this.cartService.cart.items.length;
    localStorage.setItem('itemsLength', this.cartService.cartLength);
    localStorage.removeItem('cart');
    this.checkoutForm.reset();

    this.router.navigate(['/order']);

    // this.toast.success({detail:"Success!", summary:"Your order has been placed successfully and is currently being processed", duration:5000});
  }
}
