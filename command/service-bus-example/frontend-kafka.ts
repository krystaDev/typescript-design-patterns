import {EventBus} from "./event-bus";
import {Receiver} from "./receiver";
import {Subject} from "./subject";

export class FrontendKafka implements EventBus {
  receivers: {
    [key: string]: Receiver[],
  } = {};

  constructor(
    public defaultTriesCount: number = 3,
  ) {}

  // @ts-ignore
  public async publish(topic: string, subject: Subject, tries: number = 0): Promise<void> {
    if (tries === 0) {
      tries = this.defaultTriesCount;
    }

    const receivers = this.getTopicReceivers(topic);

    // Run promises
    receivers.map(
      // @ts-ignore
      receiver => new Promise(resolve => resolve(this.retryPublish(topic, subject, receiver, tries))),
    );
  }

  private getTopicReceivers(topic: string): Receiver[] {
    // Here you can realise logic with regexp
    // For example if topic notification version hither then 1.1.1
    if (!this.receivers[topic]) {
      return [];
    }

    return this.receivers[topic];
  }

  private retryPublish(topic: string, subject: Subject, receiver: Receiver, triesLeft: number) {
    try {
      // Fake error generator
      const isValid = triesLeft === 1 || Math.random() >= 0.5;
      if (!isValid) {
        throw new Error('What happened?');
      }
      // Fake error generator end
      receiver.receive(topic, subject);
    } catch (e) {
      console.log('error happened');

      // Here you can log fail
      triesLeft -= 1;

      if (triesLeft > 0) {
        this.retryPublish(topic, subject, receiver, triesLeft);
      }
    }
  }

  public subscribe(topic: string, receiver: Receiver) {
    if (!this.receivers[topic]) {
      this.receivers[topic] = [];
    }

    this.receivers[topic].push(receiver);
  }

  public unsubscribe(topic: string, receiver: Receiver) {
    if (!this.receivers[topic]) {
      return;
    }

    this.receivers[topic] = this.receivers[topic].filter(item => item !== receiver);
  }
}
