import {Pizza} from "../../pizza-abstract";

export class AmericanCheesePizza extends Pizza {

  constructor() {
    super();

    this.name = 'American sea food pizza with sauce';
    this.sauce = 'Sauce';
    this.dough = 'Fat dough';

    this.extras.push('prawn');
    this.extras.push('clam');
  }
}
