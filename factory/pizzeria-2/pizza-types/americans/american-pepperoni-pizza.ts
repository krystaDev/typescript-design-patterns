import {Pizza} from "../../pizza-abstract";
import {IProductsFactory} from "../../products-factory-interface";

export class AmericanPepperoniPizza extends Pizza {

  constructor(factory: IProductsFactory) {
    super(factory);

    this.name = 'American pepperoni pizza with hot sauce';
  }
}
