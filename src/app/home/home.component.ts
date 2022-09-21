import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // declare food property
  foods:any = [];

  constructor(private foodService:FoodService) { }

  ngOnInit(): void {
    // fill the food variable with foods from the food service
    this.foods = this.foodService.getAll();
  }

}
