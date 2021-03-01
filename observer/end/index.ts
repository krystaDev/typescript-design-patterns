#!/usr/bin/env ts-node-script

import {ObservableWeatherStation} from "./observable-weather-station";
import {ArchiveWeatherDataAsObserver} from "./widgets/archive-weather-data-as-observer";
import {ScreenWidgetAsObserver} from "./widgets/screen-widget-as-observer";

const t = new ObservableWeatherStation();
const archive = new ArchiveWeatherDataAsObserver();
const screen = new ScreenWidgetAsObserver();
t.addNewObserver(archive);
t.addNewObserver(screen);
setTimeout(() => {
  t.removeObserver(archive);
}, 4 * 1000);

setTimeout(() => {
  t.addNewObserver(archive);
}, 6 * 1000);
