import {RunInterface} from "./run-interface";

export class NormalRun implements RunInterface {
  run() {
    console.log(`I can run`);
  }
}
