import {ICheese, IDough, IMeat, ISauce, IVegetable} from "./products-interfaces";

export interface IProductsFactory {
  createDough(): IDough;
  createSauce(): ISauce;
  createCheese(): ICheese;
  createVegetables(): IVegetable[];
  createMeats(): IMeat[];
}
