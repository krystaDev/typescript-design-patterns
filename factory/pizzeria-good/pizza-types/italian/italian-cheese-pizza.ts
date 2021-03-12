import {Pizza} from "../../pizza-base";

export class ItalianCheesePizza extends Pizza {
  constructor() {
    super();

    this.name = 'Italian cheese pizza with sauce marinara';
    this.sauce = 'Sos Marinara';
    this.dough = 'Slight shortbread dough';

    this.extras.push('Cheese Reggiano');
  }

}
