import {Pizza} from "../../pizza-abstract";

export class ItalianPepperoniPizza extends Pizza {
  constructor() {
    super();

    this.name = 'Italian pepperoni pizza with hot olive oil';
    this.sauce = 'Hot olive oil';
    this.dough = 'Slight shortbread dough';

    this.extras.push('Pepperoni');
    this.extras.push('Italian Parma Ham');
  }

}
