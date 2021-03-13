import {Pizza} from "../../pizza-base";

export class AmericanVegePizza extends Pizza {

  constructor() {
    super();

    this.name = 'American VEGE pizza with sauce from wild garlic';
    this.sauce = 'Sauce garlic';
    this.dough = 'Slight dough';

    this.extras.push('Cheese from tofu');
  }

  pack() {
    console.log('Pizza is packed in BIO package');
  }
}
