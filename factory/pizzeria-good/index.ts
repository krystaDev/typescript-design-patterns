#!/usr/bin/env ts-node-script

import {ItalianPizzeria} from "./pizzeria-types/italian-pizzeria";
import {PizzaType} from "./pizza-type";
import {AmericansPizzeria} from "./pizzeria-types/americans-pizzeria";
import {logSeparator} from "../../utils";

const italianPlace = new ItalianPizzeria();
const americanPlace = new AmericansPizzeria();

logSeparator('Italy');
italianPlace.orderPizza(PizzaType.SEA_FOOD);

console.log('USA');
americanPlace.orderPizza(PizzaType.SEA_FOOD);

