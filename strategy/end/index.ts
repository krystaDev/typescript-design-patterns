#!/usr/bin/env ts-node-script

import {PerfectDog} from "./perfect-dog";
import {NoFootNoRun} from "./run/no-foot-no-run";
import {logSeparator} from "../../utils";

const myDog = new PerfectDog();

logSeparator('New dog');
myDog.bark();
myDog.doTrick();
myDog.run();
logSeparator('Small accident of Dog');
myDog.changeRunInterface(new NoFootNoRun());
myDog.run();
