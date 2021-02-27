import {BarkInterface} from "./bark-interface";

export class LoudBark implements BarkInterface{
  bark() {
    console.log('Loud bark');
  }
}
