import {Pizza} from "../../pizza-base";

export class ItalianSeaFoodPizza extends Pizza {
  constructor() {
    super();

    this.name = 'Italian sea food pizza with olive oil';
    this.sauce = 'Olive oil';
    this.dough = 'Slight shortbread dough';

    this.extras.push('Cheese cheddar');
  }

}
