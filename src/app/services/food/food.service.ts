import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  // return all food items
  getAll():String[]{
    return [
      '/assets/images/foods/food1.jpeg',
      '/assets/images/foods/food2.jpg',
      '/assets/images/foods/food3.jpeg',
      '/assets/images/foods/food4.jpg',
      '/assets/images/foods/food5.jpg',
      '/assets/images/foods/food6.jpeg'
    ]
  }
}
