#!/usr/bin/env ts-node-script
import {Chain} from "./chain";

const chain = new Chain();

chain.process(90);
chain.process(-50);
chain.process(0);
chain.process(91);
