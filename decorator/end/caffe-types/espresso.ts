import {Caffe} from "../core/caffe";

export class Espresso extends Caffe {
  constructor() {
    super();

    this.description = 'Express';
  }

  public getCost(): number {
    return 1.99;
  }

}
