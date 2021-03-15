import {ICheese, IDough, IMeat, ISauce, IVegetable} from "./products-interfaces";
import {IProductsFactory} from "./products-factory-interface";

export abstract class Pizza {
  protected readonly factory: IProductsFactory;
  protected name: string;
  protected dough: IDough;
  protected sauce: ISauce;
  protected cheese: ICheese;
  protected vegetables: IVegetable[];
  protected meat: IMeat[];

  protected constructor(factory: IProductsFactory) {
    this.factory = factory;
  }

  protected extras: string[] = [];

  prepare(): void {
    console.log('Pizza is preparing');
    this.dough = this.factory.createDough();
    this.cheese = this.factory.createCheese();
    this.sauce = this.factory.createSauce();
  }

  bake(): void {
    console.log('Pizza is baked');
  }

  slice(): void {
    console.log('Pizza is sliced');
  }

  pack(): void {
    console.log('Pizza is packed');
  }
}
