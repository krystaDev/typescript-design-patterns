import {BarkInterface} from "./bark/bark-interface";
import {RunInterface} from "./run/run-interface";
import {TrickInterface} from "./trick/trick-interface";

export abstract class Dog {
  protected barkInterface: BarkInterface;
  protected runInterface: RunInterface;
  protected trickInterface: TrickInterface;

  public bark() {
    this.barkInterface.bark();
  }

  public run() {
    this.runInterface.run();
  }

  public doTrick() {
    this.trickInterface.doTrick();
  }

  public changeBarkInterface(barkInterface: BarkInterface) {
    this.barkInterface = barkInterface;
  }

  public changeRunInterface(runInterface: RunInterface) {
    this.runInterface = runInterface;
  }

  public changeTrickInterface(trickInterface: TrickInterface) {
    this.trickInterface = trickInterface;
  }
}
