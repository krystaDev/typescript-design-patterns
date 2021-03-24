#!/usr/bin/env ts-node-script

import {JobDelegator} from "./job-delegator";
import {TaskWorker} from "./task-worker";
import {SendRequestToApi} from "./send-request-to-api";

const delegator = new JobDelegator(3);
const worker1 = new TaskWorker();
const worker2 = new TaskWorker();
const worker3 = new TaskWorker();
delegator.subscribe(worker1);
delegator.subscribe(worker2);
delegator.subscribe(worker3);
const job = new SendRequestToApi();
delegator.publish(job);

