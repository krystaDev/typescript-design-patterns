import {Receiver} from "./receiver";
import {Subject} from "./subject";

export class TaskWorker implements Receiver{
  receive(subject: Subject): void {
    subject.doTask();
  }
}
