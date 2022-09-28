import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/Tag';

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
        stars: 4.5,
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
        stars: 3.5,
        imageUrl: '/assets/images/foods/food2.jpg',
        tags: ['FastFood', 'Burger', 'Lunch'],
      },
      {
        id: 3,
        name: 'Chicken Pie',
        price: 300,
        cookTime: '20-30',
        favorite: false,
        origins: ['N. America'],
        stars: 4.0,
        imageUrl: '/assets/images/foods/food3.jpeg',
        tags: ['FastFood', 'Snacks'],
      },
      {
        id: 4,
        name: 'Vegetables Pizza',
        price: 1500,
        cookTime: '40-50',
        favorite: true,
        origins: ['Italy'],
        stars: 4.0,
        imageUrl: '/assets/images/foods/food4.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 7,
        name: 'Chicken Soup',
        price: 1500,
        cookTime: '50-60',
        favorite: false,
        origins: ['Europe', 'N. America'],
        stars: 4.3,
        imageUrl: '/assets/images/foods/food7.jpeg',
        tags: ['Soup'],
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
        origins: ['Nigeria'],
        stars: 5.0,
        imageUrl: '/assets/images/foods/food6.jpeg',
        tags: ['Lunch'],
      },
      {
        id: 8,
        name: 'Goat Peppersoup',
        price: 2500,
        cookTime: '50-60',
        favorite: true,
        origins: ['Nigeria'],
        stars: 5.0,
        imageUrl: '/assets/images/foods/food8.jpeg',
        tags: ['Soup'],
      },
    ]
  }

  getAllFoodsBySearchTerm(searchTerm:string): Food[] {
    return this.getAll().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  getAllFoodsByTag(tag:string):Food[]{
    if (tag == "All") {
      return this.getAll();
    } else {
      return this.getAll().filter(food=>food.tags?.includes(tag));
    }
  }

  getAllTags():Tag[]{
    return [
      {name: 'All', count: 8},
      {name: 'FastFood', count: 5},
      {name: 'Lunch', count: 5},
      {name: 'Burger', count: 2},
      {name: 'Snacks', count: 1},
      {name: 'Pizza', count: 1},
      {name: 'Soup', count: 2},
    ]
  }

  getFoodById(id:number): Food{
    return this.getAll().find(food=>food.id == id)!; //adding ! at the end ensures it desnt check return type
  }
}
