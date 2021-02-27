import {RunInterface} from "./run-interface";

export class RunAway implements RunInterface {
  run() {
    console.log(`I can only run away`);
  }
}
