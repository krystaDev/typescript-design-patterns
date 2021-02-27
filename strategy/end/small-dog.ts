import {Dog} from "./dog";
import {SilentBark} from "./bark/silent-bark";
import {NormalRun} from "./run/normal-run";
import {RetrieveTrick} from "./trick/retrieve-trick";

export class SmallDog extends Dog {
  constructor() {
    super();

    this.runInterface = new NormalRun();
    this.barkInterface = new SilentBark();
    this.trickInterface = new RetrieveTrick();
  }
}
