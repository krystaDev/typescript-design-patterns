import {Dog} from "./dog";
import {SilentBark} from "./bark/silent-bark";
import {NormalRun} from "./run/normal-run";
import {RetrieveTrick} from "./trick/retrieve-trick";

export class SmallDog extends Dog {
  constructor() {
    super(new SilentBark(), new NormalRun(), new RetrieveTrick());
  }
}
