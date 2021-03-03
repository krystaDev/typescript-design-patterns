#!/usr/bin/env ts-node-script

import {logSeparator} from "../../utils";
import {AmericanCaffe} from "./american-caffe";
import {IrishCaffe} from "./irish-caffe";

const caffe = new IrishCaffe();

caffe.addMilk();
caffe.addMilk();
caffe.addMilk();
caffe.addMilk();

logSeparator(`Your ${caffe.getDescription()} is ready`);
console.log('Caffe price: ', Math.round(caffe.getCost() * 100) / 100);
