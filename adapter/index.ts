#!/usr/bin/env ts-node-script

import {Machine} from "./machine";
import {NewObject} from "./new-object";
import {OldObject} from "./old-object";
import {OldObjectAdapter} from "./old-object-adapter";

const newObject = new NewObject();
const oldObject = new OldObject();
// const machine = new Machine(newObject);
// const machine = new Machine(oldObject);

const oldObjectAdapter = new OldObjectAdapter(oldObject);
const machine = new Machine(oldObjectAdapter);
machine.testObject();
