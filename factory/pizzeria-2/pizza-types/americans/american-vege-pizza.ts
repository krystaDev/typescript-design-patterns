import {Pizza} from "../../pizza-abstract";
import {IProductsFactory} from "../../products-factory-interface";

export class AmericanVegePizza extends Pizza {

  constructor(factory: IProductsFactory) {
    super(factory);

    this.name = 'American VEGE pizza with sauce from wild garlic';
  }

  pack() {
    console.log('Pizza is packed in BIO package');
  }
}
