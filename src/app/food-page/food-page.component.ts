import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from '../shared/models/food';
import { FoodService } from '../services/food/food.service';
import { CartService } from '../services/cart/cart.service';

import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {

  food!: Food;
  itemInCart: boolean = false;

  constructor(private activatedRoute:ActivatedRoute,
    private foodService: FoodService,
    private cartService: CartService,
    private router:Router,
    private toast:NgToastService) {
    activatedRoute.params.subscribe((params)=>{
      if (params?.['id']) {
        this.food = foodService.getFoodById(params?.['id']);
      }

      // check if food exists in cart
      let cartItem = cartService.cart.items.find(item=>item.food.id === this.food.id);
      if (cartItem){
        this.itemInCart = true;
      } else {
        this.itemInCart = false;
      }
    })
  }

  ngOnInit(): void {
  }

  addToCart(){
    this.cartService.addToCart(this.food);

    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);

    // this.toast.success({detail:"Success!", summary:"Item added to cart", duration:3000});
  }


}
