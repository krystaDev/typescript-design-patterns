#!/usr/bin/env ts-node-script

import {TrainedDog} from "./trained-dog";
import {WildDog} from "./wild-dog";
import {ToyDog} from "./toy-dog";
import {logSeparator} from "../../utils";

const trainedDog = new TrainedDog();
const wildDog = new WildDog();
const toyDog = new ToyDog();

logSeparator('TRAINED DOG');
trainedDog.bark();
trainedDog.run();
trainedDog.doTrick();

logSeparator('WILD DOG');
wildDog.bark();
wildDog.run();
wildDog.doTrick();

logSeparator('TOY DOG');
toyDog.bark();
toyDog.run();
toyDog.doTrick();
