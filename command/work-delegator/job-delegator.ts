import {Receiver} from "./receiver";
import {Subject} from "./subject";

export class JobDelegator {
  receivers: Receiver[] = [];

  constructor(
    public defaultTriesCount: number = 3,
  ) {}

  // @ts-ignore
  public async publish(subject: Subject, tries: number = 0): Promise<void> {
    if (tries === 0) {
      tries = this.defaultTriesCount;
    }

    const receivers = this.receivers;

    // Run promises
    receivers.map(
      // @ts-ignore
      receiver => new Promise(resolve => resolve(this.retryPublish(subject, receiver, tries))),
    );
  }

  private retryPublish(subject: Subject, receiver: Receiver, triesLeft: number) {
    try {
      // Fake error generator
      receiver.receive(subject);
    } catch (e) {
      console.log('error happened');

      // Here you can log fail
      triesLeft -= 1;

      if (triesLeft > 0) {
        this.retryPublish(subject, receiver, triesLeft);
      }
    }
  }

  public subscribe(receiver: Receiver) {
    this.receivers.push(receiver);
  }

  public unsubscribe(receiver: Receiver) {
    if (!this.receivers) {
      return;
    }

    this.receivers = this.receivers.filter(item => item !== receiver);
  }
}
