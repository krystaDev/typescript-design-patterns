import {Pizza} from "../../pizza-abstract";
import {IProductsFactory} from "../../products-factory-interface";

export class ItalianPepperoniPizza extends Pizza {
  constructor(factory: IProductsFactory) {
    super(factory);

    this.name = 'Italian pepperoni pizza with hot olive oil';
  }

}
