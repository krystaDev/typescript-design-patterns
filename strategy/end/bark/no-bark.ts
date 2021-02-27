import {BarkInterface} from "./bark-interface";

export class NoBark implements BarkInterface {
  bark() {
    console.log(`I can't  bark....`);
  }
}
