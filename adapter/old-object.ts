import {getRandomNumbersInRange} from "../utils";
import {NewObjectInterface} from "./new-object";

export interface OldObjectInterface {
  action1: () => void;
  execute: () => void;
  result: () => number;
}

export class OldObject implements OldObjectInterface {
  action1(): void {
    console.log('action1');
  }

  execute(): void {
    console.log('execute');
  }

  result(): number {
    return getRandomNumbersInRange(0, 10);
  }

}
