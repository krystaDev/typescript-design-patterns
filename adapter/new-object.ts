import {getRandomNumbersInRange} from "../utils";

export interface NewObjectInterface {
  runMainTask: () => void;
  finish: () => void;
  getCalculationResult: () => number;
}

export class NewObject implements NewObjectInterface {
  finish(): void {
    console.log('finish');
  }

  getCalculationResult(): number {
    return getRandomNumbersInRange(0, 10);
  }

  runMainTask(): void {
    console.log('runMainTask');
  }

}
