import {Receiver} from "./receiver";
import {Subject} from "./subject";

export interface EventBus {
  subscribe(topic: string, receiver: Receiver): void;
  unsubscribe(topic: string, receiver: Receiver): void;
  publish(topic: string, subject: Subject): Promise<void>;
}
