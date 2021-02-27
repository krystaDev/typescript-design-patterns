import {BarkInterface} from "./bark-interface";

export class SilentBark implements BarkInterface {
  bark() {
    console.log('Silent bark');
  }
}
