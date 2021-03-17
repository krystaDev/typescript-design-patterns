import {IProductsFactory} from "../products-factory-interface";
import {ICheese, IDough, IMeat, ISauce, IVegetable} from "../products-interfaces";
import {CheeseGouda} from "./americans-products/cheese-gouda";
import {FatDough} from "./americans-products/fat-dough";
import {HamBeef} from "./americans-products/ham-beef";
import {BarbecueSauce} from "./americans-products/barbecue-sauce";
import {TomatoVegetable} from "./americans-products/tomato-vegetable";

export class AmericansProductsFactory implements IProductsFactory {
  createCheese(): ICheese {
    return new CheeseGouda();
  }

  createDough(): IDough {
    return new FatDough();
  }

  createMeats(): IMeat[] {
    return [new HamBeef()];
  }

  createSauce(): ISauce {
    return new BarbecueSauce();
  }

  createVegetables(): IVegetable[] {
    return [new TomatoVegetable()];
  }
}
