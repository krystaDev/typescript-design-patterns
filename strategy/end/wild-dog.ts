import {Dog} from "./dog";
import {JumpTrick} from "./trick/jump-trick";
import {LoudBark} from "./bark/loud-bark";
import {RunAway} from "./run/run-away";
import {RetrieveTrick} from "./trick/retrieve-trick";

export class WildDog extends Dog {
  constructor() {
    super(new LoudBark(), new RunAway(), new RetrieveTrick());
  }
}

