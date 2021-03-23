#!/usr/bin/env ts-node-script

import {FrontendKafka} from "./frontend-kafka";
import {Receiver} from "./receiver";
import {Subject} from "./subject";


class SmsNotificationService implements Receiver {
  receive(topic: string, subject: Subject) {
    console.log('Sms event received', topic, subject);
  }
}

// tslint:disable-next-line:max-classes-per-file
class EmailNotificationService implements Receiver {
  receive(topic: string, subject: Subject) {
    console.log('Email event received', topic, subject);
  }
}
const frontendKafka = new FrontendKafka();
const smsService = new SmsNotificationService();
const emailService = new EmailNotificationService();

frontendKafka.subscribe('notification', smsService);
frontendKafka.subscribe('notification', emailService);

frontendKafka.publish('notification', 'name');

frontendKafka.unsubscribe('notification', smsService);
frontendKafka.publish('notification', 'name 2');
