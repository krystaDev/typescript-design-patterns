import {Caffe} from "./caffe";

export class Latte extends Caffe {
  constructor() {
    super('Latte');
  }

  getCost(): number {
    return super.getCost() + 3.99;
  }
}
