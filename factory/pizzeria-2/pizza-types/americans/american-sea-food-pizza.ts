import {Pizza} from "../../pizza-abstract";
import {IProductsFactory} from "../../products-factory-interface";

export class AmericanSeaFoodPizza extends Pizza {

  constructor(factory: IProductsFactory) {
    super(factory);

    this.name = 'American cheese pizza with sauce barbecue';
  }

  slice() {
    console.log('Pizza is sliced in square pieces');
  }
}
