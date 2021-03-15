import {Pizzeria} from "../pizzeria";
import {Pizza} from "../pizza-abstract";
import {PizzaType} from "../pizza-type";
import {AmericanCheesePizza} from "../pizza-types/americans/american-cheese-pizza";
import {AmericanVegePizza} from "../pizza-types/americans/american-vege-pizza";
import {AmericanPepperoniPizza} from "../pizza-types/americans/american-pepperoni-pizza";
import {AmericanSeaFoodPizza} from "../pizza-types/americans/american-sea-food-pizza";
import {AmericansProductsFactory} from "../products-factories/americans-products-factory";

export class AmericansPizzeria extends Pizzeria {
  constructor() {
    super(new AmericansProductsFactory());
  }
  protected createPizza(type: PizzaType): Pizza {

    switch (type) {
      case PizzaType.CHEESE:
        return new AmericanCheesePizza(this.productsFactory);
      case PizzaType.VEGE:
        return new AmericanVegePizza(this.productsFactory);
      case PizzaType.PEPPERONI:
        return new AmericanPepperoniPizza(this.productsFactory);
      case PizzaType.SEA_FOOD:
        return new AmericanSeaFoodPizza(this.productsFactory);
    }
  }
}
