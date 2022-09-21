import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/food';

// multiple routes lead to home component. So use ActivatedRoute to know
// which one to activate
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // declare food property
  foods:Food[] = [];

  constructor(private foodService:FoodService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    // listen for route parameters
    this.route.params.subscribe(params => {
      if (params?.['searchTerm']){
        // search for foods that contain the search term
        this.foods = this.foodService.getAllFoodsBySearchTerm(params?.['searchTerm']);
      } else if (params?.['tag']) {
        // check for food that have the tag
        this.foods = this.foodService.getAllFoodsByTag(params?.['tag']);
      } else {
        // fill the food variable with all foods from the food service
        this.foods = this.foodService.getAll();
      }
    })

  }

}
