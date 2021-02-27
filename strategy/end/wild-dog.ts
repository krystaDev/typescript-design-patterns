import {Dog} from "./dog";
import {JumpTrick} from "./trick/jump-trick";
import {LoudBark} from "./bark/loud-bark";
import {RunAway} from "./run/run-away";

export class WildDog extends Dog {
  constructor(props) {
    super();

    this.trickInterface = new JumpTrick();
    this.barkInterface = new LoudBark();
    this.runInterface = new RunAway();
  }
}

