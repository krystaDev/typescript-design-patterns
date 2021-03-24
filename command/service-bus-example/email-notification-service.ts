import {Receiver} from "./receiver";
import {Subject} from "./subject";

export class EmailNotificationService implements Receiver {
  receive(topic: string, subject: Subject) {
    console.log('Email event received', topic, subject);
  }
}
