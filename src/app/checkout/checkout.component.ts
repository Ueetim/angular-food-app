import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { Cart } from '../shared/models/Cart';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private cartService: CartService,
    private formBuilder: FormBuilder,
    private router: Router) {
    this.items = this.cartService.getCart();

    this.total = this.cartService.totalPrice();


  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    // Process checkout data here
    console.warn('Your order has been submitted', this.checkoutForm.value.name);
    this.cartService.cart = new Cart;
    this.cartService.cartLength = this.cartService.cart.items.length;
    localStorage.setItem('itemsLength', this.cartService.cartLength);
    this.checkoutForm.reset();

    this.router.navigate(['/order'])
  }
}
