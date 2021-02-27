import {Dog} from "./dog";
import {NormalRun} from "./run/normal-run";
import {NoBark} from "./bark/no-bark";
import {JumpTrick} from "./trick/jump-trick";

export class PerfectDog extends Dog {
  constructor() {
    super();

    this.runInterface = new NormalRun();
    this.barkInterface = new NoBark();
    this.trickInterface = new JumpTrick();
  }
}
