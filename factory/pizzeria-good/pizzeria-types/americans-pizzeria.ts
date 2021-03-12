import {Pizzeria} from "../pizzeria";
import {Pizza} from "../pizza-base";
import {PizzaType} from "../pizza-type";
import {AmericanCheesePizza} from "../pizza-types/americans/american-cheese-pizza";
import {AmericanVegePizza} from "../pizza-types/americans/american-vege-pizza";
import {AmericanPepperoniPizza} from "../pizza-types/americans/american-pepperoni-pizza";
import {AmericanSeaFoodPizza} from "../pizza-types/americans/american-sea-food-pizza";

export class AmericansPizzeria extends Pizzeria {
  protected createPizza(type: PizzaType): Pizza {

    switch (type) {
      case PizzaType.CHEESE:
        return new AmericanCheesePizza();
      case PizzaType.VEGE:
        return new AmericanVegePizza();
      case PizzaType.PEPPERONI:
        return new AmericanPepperoniPizza();
      case PizzaType.SEA_FOOD:
        return new AmericanSeaFoodPizza();
    }
  }
}
