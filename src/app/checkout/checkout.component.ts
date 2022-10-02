import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { Cart } from '../shared/models/Cart';
import { FormBuilder } from '@angular/forms';

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
    private formBuilder: FormBuilder) {
    this.items = this.cartService.getCart();

    this.total = this.cartService.totalPrice();


  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    // Process checkout data here
    // this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value.name);
    // this.checkoutForm.reset();
  }
}
