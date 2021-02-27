import {RunInterface} from "./run-interface";

export class NoFootNoRun implements RunInterface {
  run() {
    console.log(`No foot... no run...`);
  }
}
