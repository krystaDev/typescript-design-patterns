import {PizzaType} from "./pizza-type";
import {Pizza} from './pizza-base';

export abstract class Pizzeria {
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
