import {Pizza} from "../../pizza-base";

export class ItalianVegePizza extends Pizza {
  constructor() {
    super();

    this.name = 'Italian cheese pizza with sauce from tofu';
    this.sauce = 'Sauce from tofu';
    this.dough = 'Slight shortbread dough';

    this.extras.push('Cheese from bean');
  }

}
