import {TrickInterface} from "./trick-interface";

export class RetrieveTrick implements TrickInterface {
  doTrick() {
    console.log('I can retrieve! Throw me something!');
  }
}
