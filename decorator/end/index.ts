#!/usr/bin/env ts-node-script

import {logSeparator} from "../../utils";
import {IrishCaffe} from "./caffe-types/irish-caffe";
import {Milk} from "./supplements/milk";
import {Chocolate} from "./supplements/chocolate";

const caffe = new IrishCaffe();
const cafeWithMilk = new Milk(caffe);
const cafeWithMilkAndChocolate = new Chocolate(cafeWithMilk);

logSeparator(`Your ${cafeWithMilkAndChocolate.getDescription()} is ready`);
console.log('Caffe price: ', Math.round(cafeWithMilkAndChocolate.getCost() * 100) / 100);
console.log(cafeWithMilkAndChocolate instanceof Chocolate);
