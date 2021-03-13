import {Pizzeria} from "../pizzeria";
import {PizzaType} from "../pizza-type";
import {Pizza} from "../pizza-abstract";
import {ItalianCheesePizza} from "../pizza-types/italian/italian-cheese-pizza";
import {ItalianVegePizza} from "../pizza-types/italian/italian-vege-pizza";
import {ItalianSeaFoodPizza} from "../pizza-types/italian/italian-sea-food-pizza";
import {ItalianPepperoniPizza} from "../pizza-types/italian/italian-pepperoni-pizza";

export class ItalianPizzeria extends Pizzeria {
  constructor() {
    super();

  }

  protected createPizza(type: PizzaType): Pizza {
    switch (type) {
      case PizzaType.CHEESE:
        return new ItalianCheesePizza();
      case PizzaType.VEGE:
        return new ItalianVegePizza();
      case PizzaType.SEA_FOOD:
        return new ItalianSeaFoodPizza();
      case PizzaType.PEPPERONI:
        return new ItalianPepperoniPizza();
    }
  }
}
