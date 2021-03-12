import {Pizzeria} from "../pizzeria";
import {PizzaType} from "../pizza-type";
import {Pizza} from "../pizza-base";
import {ItalianCheesePizza} from "../pizza-types/italian-cheese-pizza";

export class ItalianPizzeria extends Pizzeria {
  constructor() {
    super();

  }

  protected createPizza(type: PizzaType): Pizza {
    switch (type) {
      case PizzaType.CHEESE:
        return new ItalianCheesePizza();
    }
  }
}
