import {Receiver} from "./receiver";
import {Subject} from "./subject";

export class SmsNotificationService implements Receiver {
  receive(topic: string, subject: Subject) {
    console.log('Sms event received', topic, subject);
  }
}
