import {NewObjectInterface} from "./new-object";
import {OldObjectInterface} from "./old-object";

export class OldObjectAdapter implements NewObjectInterface {
  private oldObject: OldObjectInterface;
  constructor(oldObject: OldObjectInterface) {
    this.oldObject = oldObject;
  }
  finish(): void {
    this.oldObject.execute();
  }

  getCalculationResult(): number {
    return this.oldObject.result();
  }

  runMainTask(): void {
    this.oldObject.action1();
  }

}
