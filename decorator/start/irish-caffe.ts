import {Caffe} from "./caffe";

export class IrishCaffe extends Caffe {
  constructor() {
    super('Irish caffe');
  }

  getCost(): number {
    return super.getCost() + 2.49;
  }
}
