import {Pizza} from "../../pizza-abstract";
import {IProductsFactory} from "../../products-factory-interface";

export class ItalianVegePizza extends Pizza {
  constructor(factory: IProductsFactory) {
    super(factory);

    this.name = 'Italian cheese pizza with sauce from tofu';
  }

}
