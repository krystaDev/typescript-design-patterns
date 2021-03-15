import {IProductsFactory} from "../products-factory-interface";
import {ICheese, IDough, IMeat, ISauce, IVegetable} from "../products-interfaces";

export class AmericansProductsFactory implements IProductsFactory {
  createCheese(): ICheese {
    return undefined;
  }

  createDough(): IDough {
    return undefined;
  }

  createMeats(): IMeat[] {
    return [];
  }

  createSauce(): ISauce {
    return undefined;
  }

  createVegetables(): IVegetable[] {
    return [];
  }

}
