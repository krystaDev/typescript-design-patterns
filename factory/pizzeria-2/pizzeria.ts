import {PizzaType} from "./pizza-type";
import {Pizza} from './pizza-abstract';
import {IProductsFactory} from "./products-factory-interface";

export abstract class Pizzeria {
  protected readonly productsFactory: IProductsFactory;

  constructor(factory: IProductsFactory) {
    this.productsFactory = factory;
  }
  public orderPizza(type: PizzaType): Pizza {
    const pizza = this.createPizza(type);

    pizza.prepare();
    pizza.bake();
    pizza.slice();
    pizza.pack();

    return pizza;
  }
  protected abstract createPizza(type: PizzaType): Pizza;
}
