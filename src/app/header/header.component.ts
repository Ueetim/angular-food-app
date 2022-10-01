import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() cartLength:void;

  constructor(private cartService: CartService) {
    this.cartLength = this.cartService.cartLength;
  }

  ngOnInit(): void {
  }

}
