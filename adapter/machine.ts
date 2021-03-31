import {NewObject, NewObjectInterface} from "./new-object";

export class Machine {

  private object: NewObjectInterface;
  constructor(object: NewObjectInterface) {
    this.object = object;
  }

  testObject() {
    this.object.runMainTask();
    this.object.finish();
    console.log(this.object.getCalculationResult());
  }
}
