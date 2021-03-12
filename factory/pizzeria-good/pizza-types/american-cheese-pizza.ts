import {Pizza} from "../pizza-base";

export class AmericanCheesePizza extends Pizza {

  constructor() {
    super();

    this.name = 'American cheese pizza with sauce barbecue';
    this.sauce = 'Sauce barbecue';
    this.dough = 'Fat dough';

    this.extras.push('Cheese mozzarella');
  }

  slice() {
    console.log('Pizza is sliced in square pieces');
  }
}
