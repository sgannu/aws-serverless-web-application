export interface IFoodItem {
  name: string;
  id: string;
  icon: string;
  rating: number;
  likes: number;
}

export class FoodItem implements IFoodItem {
    constructor(
        public name: string,
        public id: string,
        public rating: number,
        public likes: number,
        public icon: string ) { }
}