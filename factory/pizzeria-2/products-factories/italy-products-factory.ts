import {IProductsFactory} from "../products-factory-interface";
import {ICheese, IDough, IMeat, ISauce, IVegetable} from "../products-interfaces";
import {CheeseRegiano} from "./italian-products/cheese-regiano";
import {DoughSlightShortbread} from "./italian-products/dough-slight-shortbread";
import {HamParm} from "./italian-products/ham-parm";
import {SauceMarinara} from "./italian-products/sauce-marinara";
import {VegetableMix1} from "./italian-products/vegetable-mix-1";

export class ItalyProductsFactory implements IProductsFactory {
  createCheese(): ICheese {
    return new CheeseRegiano();
  }

  createDough(): IDough {
    return new DoughSlightShortbread();
  }

  createMeats(): IMeat[] {
    return [new HamParm()];
  }

  createSauce(): ISauce {
    return new SauceMarinara();
  }

  createVegetables(): IVegetable[] {
    return [new VegetableMix1()];
  }


}
