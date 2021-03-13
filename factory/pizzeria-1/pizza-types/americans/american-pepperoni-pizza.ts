import {Pizza} from "../../pizza-base";

export class AmericanPepperoniPizza extends Pizza {

  constructor() {
    super();

    this.name = 'American pepperoni pizza with hot sauce';
    this.sauce = 'Special hot sauce';
    this.dough = 'Fat dough';

    this.extras.push('Pepperoni');
    this.extras.push('Salami');
  }
}
