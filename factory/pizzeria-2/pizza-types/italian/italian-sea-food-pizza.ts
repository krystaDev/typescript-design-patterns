import {Pizza} from "../../pizza-abstract";
import {IProductsFactory} from "../../products-factory-interface";

export class ItalianSeaFoodPizza extends Pizza {
  constructor(factory: IProductsFactory) {
    super(factory);

    this.name = 'Italian sea food pizza with olive oil';
  }

  prepare(): void {
    console.log('Pizza is preparing');
    this.dough = this.factory.createDough();
    this.cheese = this.factory.createCheese();
    this.sauce = this.factory.createSauce();
    this.meat = this.factory.createMeats();
  }
}
