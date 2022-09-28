import { Component, OnInit } from '@angular/core';

import { FoodService } from 'src/app/services/food/food.service';
import { Food } from 'src/app/shared/models/food';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  foods:Food[];

  constructor(private foodService:FoodService) {
    this.foods = foodService.getAll().filter(food => food.stars > 4.0)
  }

  ngOnInit(): void {
  }

}
