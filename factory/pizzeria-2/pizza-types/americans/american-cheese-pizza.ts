import {Pizza} from "../../pizza-abstract";
import {IProductsFactory} from "../../products-factory-interface";

export class AmericanCheesePizza extends Pizza {

  constructor(factory: IProductsFactory) {
    super(factory);

    this.name = 'American sea food pizza with sauce';
  }
}
