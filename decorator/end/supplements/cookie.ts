import {SupplementDecorator} from "../core/supplement-decorator";
import {Caffe} from "../core/caffe";

export class Cookie extends SupplementDecorator {
  private caffe: Caffe;

  constructor(caffe: Caffe) {
    super();
    this.caffe = caffe;
  }

  public getDescription(): string {
    return this.caffe.getDescription() + ", cookie";
  }

  public getCost(): number {
    return this.caffe.getCost() + 0.99;
  }
}
