import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  // return all food items
  getAll():Food[]{
    return [
      {
        id: 1,
        name: 'Saudi Shawarma',
        price: 1500,
        cookTime: '10-20',
        favorite: true,
        origins: ['Middle East'],
        stars: 4.0,
        imageUrl: '/assets/images/foods/food1.jpeg',
        tags: ['FastFood', 'Lunch'],
      },
      {
        id: 2,
        name: 'Hamburger',
        price: 2500,
        cookTime: '40-50',
        favorite: false,
        origins: ['Europe'],
        stars: 3.0,
        imageUrl: '/assets/images/foods/food2.jpg',
        tags: ['FastFood', 'Burger', 'Lunch'],
      },
      {
        id: 3,
        name: 'Chicken Pie',
        price: 300,
        cookTime: '20-30',
        favorite: false,
        origins: ['North America'],
        stars: 4.0,
        imageUrl: '/assets/images/foods/food3.jpeg',
        tags: ['FastFood', 'Snacks'],
      },
      {
        id: 4,
        name: 'Vegetables Pizza',
        price: 1500,
        cookTime: '40-50',
        favorite: false,
        origins: ['Italy'],
        stars: 4.0,
        imageUrl: '/assets/images/foods/food4.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 5,
        name: 'Cheese burger',
        price: 2300,
        cookTime: '40-50',
        favorite: false,
        origins: ['Europe'],
        stars: 3.0,
        imageUrl: '/assets/images/foods/food5.jpg',
        tags: ['FastFood', 'Burger', 'Lunch'],
      },
      {
        id: 6,
        name: 'Beef Suya',
        price: 500,
        cookTime: '20-30',
        favorite: true,
        origins: ['North America'],
        stars: 5.0,
        imageUrl: '/assets/images/foods/food6.jpeg',
        tags: ['Lunch'],
      },
    ]
  }
}
