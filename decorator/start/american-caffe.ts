import {Caffe} from "./caffe";

export class AmericanCaffe extends Caffe {
  constructor() {
    super('AmericanCaffe');
  }

  getCost(): number {
    return 2.99 + super.getCost() ;
  }
}
