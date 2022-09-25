import { Food } from "./food";

export class CartItem {
  constructor(food:Food){
    this.food = food;
    this.itemPrice = this.food.price;
  }

  food: Food;
  quantity:number = 1;
  itemPrice: number;

  getPrice():number {
    this.itemPrice = this.food.price * this.quantity;
    return this.itemPrice;
  }
}
