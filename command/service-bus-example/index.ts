#!/usr/bin/env ts-node-script

import {FrontendKafka} from "./frontend-kafka";
import {SmsNotificationService} from "./sms-notification-service";
import {EmailNotificationService} from "./email-notification-service";
import {Subject} from "./subject";


const frontendKafka = new FrontendKafka();
const smsService = new SmsNotificationService();
const emailService = new EmailNotificationService();

frontendKafka.subscribe('user_email_change', smsService);
frontendKafka.subscribe('user_email_change', emailService);

const change: Subject = {
  id: '123',
  source: 'API',
  payload: {
    email: 'nowy@adres.email'
  }
};

frontendKafka.publish('user_email_change', change);

frontendKafka.unsubscribe('user_email_change', smsService);

const newChange: Subject = {
  id: '321',
  source: 'API',
  payload: {
    email: 'nowszy@adres.email'
  }
};

frontendKafka.publish('user_email_change', newChange);

// frontendKafka.subscribe('user_email_change', smsService);
// frontendKafka.publish('user_email_change', change);

