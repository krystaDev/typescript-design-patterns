import {SupplementDecorator} from "../core/supplement-decorator";
import {Caffe} from "../core/caffe";

export class Milk extends SupplementDecorator {
  private caffe: Caffe;

  constructor(caffe: Caffe) {
    super();
    this.caffe = caffe;
  }

  public getDescription(): string {
    return this.caffe.getDescription() + ", milk";
  }

  public getCost(): number {
    return this.caffe.getCost() + 0.5;
  }
}
