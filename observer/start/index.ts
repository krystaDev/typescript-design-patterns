#!/usr/bin/env ts-node-script


import {ArchiveWeatherData} from "./widgets/archive-weather-data";
import {ScreenWidget} from "./widgets/screen-widget";
import {WeatherStation} from "./weather-station";

const t = new WeatherStation(new ArchiveWeatherData(), new ScreenWidget());
