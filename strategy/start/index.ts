#!/usr/bin/env ts-node-script

import {TrainedDog} from "./trained-dog";
import {WildDog} from "./wild-dog";
import {ToyDog} from "./toy-dog";
import {logSeparator} from "../../utils";

const trainedDog = new TrainedDog();
const wildDog = new WildDog();
const toyDog = new ToyDog();

console.log('TRAINED DOG');
trainedDog.bark();
trainedDog.run();
trainedDog.doTrick();

console.log('WILD DOG');
wildDog.bark();
wildDog.run();
wildDog.doTrick();

console.log('TOY DOG');
toyDog.bark();
toyDog.run();
toyDog.doTrick();
