import {Subject} from "./subject";

export interface Receiver {
  receive(topic: string, subject: Subject): void;
}
