import {ICheese, IDough, IMeat, ISauce, IVegetable} from "./products-interfaces";

export abstract class Pizza {
  protected name: string;
  protected dough: IDough;
  protected sauce: ISauce;
  protected cheese: ICheese[];
  protected vegetables: IVegetable[];
  protected meat: IMeat[];

  protected extras: string[] = [];

  prepare(): void {
    console.log('Pizza is preparing');
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
