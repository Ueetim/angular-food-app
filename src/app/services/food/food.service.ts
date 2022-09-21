import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  // return all food items
  getAll():String[]{
    return [
      '/assets/images/foods/food1.jpeg'
    ]
  }
}
