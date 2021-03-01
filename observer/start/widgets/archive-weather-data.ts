import {WeatherInformationInterface} from "./weather-information-interface";
import {logSeparator} from "../../../utils";
import {WeatherInfoInterface} from "../../meteo-hardware/weather-info-interface";

export class ArchiveWeatherData implements WeatherInformationInterface {
  onWeatherChange(data: WeatherInfoInterface) {
    logSeparator('ArchiveWeatherData');
    console.log(`SAVED DATA. Temp: ${data.temperature}, hum: ${data.humidity} and pressure: ${data.pressure}`);
  }
}
