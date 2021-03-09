import {Caffe} from "./caffe";

export abstract class SupplementDecorator extends Caffe {
  public abstract getDescription(): string;
}
