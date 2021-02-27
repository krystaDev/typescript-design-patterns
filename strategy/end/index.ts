#!/usr/bin/env ts-node-script

import {PerfectDog} from "./perfect-dog";
import {NoFootNoRun} from "./run/no-foot-no-run";
import {logSeparator} from "../../utils";

const myDog = new PerfectDog();

logSeparator('Dog story');
myDog.bark();
myDog.doTrick();
myDog.run();
logSeparator('Small accident...');
myDog.changeRunInterface(new NoFootNoRun());
myDog.run();
