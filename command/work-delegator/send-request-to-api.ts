import {Subject} from "./subject";

export class SendRequestToApi implements Subject {
  doTask(): void {
    console.log('SENDING REQUEST TO API');
  }
}
