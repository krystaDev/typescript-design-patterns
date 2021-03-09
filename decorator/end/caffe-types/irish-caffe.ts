import {Caffe} from "../core/caffe";

export class IrishCaffe extends Caffe {
  constructor() {
    super();

    this.description = 'Irish caffe';
  }

  public getCost(): number {
    return 2.19;
  }

}
