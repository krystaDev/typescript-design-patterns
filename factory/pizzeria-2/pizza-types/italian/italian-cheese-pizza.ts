import {Pizza} from "../../pizza-abstract";
import {IProductsFactory} from "../../products-factory-interface";

export class ItalianCheesePizza extends Pizza {
  constructor(factory: IProductsFactory) {
    super(factory);

    this.name = 'Italian cheese pizza with sauce marinara';
  }



}
