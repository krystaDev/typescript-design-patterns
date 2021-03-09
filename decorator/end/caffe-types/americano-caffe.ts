import {Caffe} from "../core/caffe";

export class AmericanoCaffe extends Caffe {
  constructor() {
    super();

    this.description = 'Caffe Americano';
  }

  public getCost(): number {
    return 1.49;
  }

}
