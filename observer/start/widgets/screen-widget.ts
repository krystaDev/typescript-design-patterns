import {WeatherInformationInterface} from "./weather-information-interface";
import {logSeparator} from "../../../utils";

export class ScreenWidget implements WeatherInformationInterface{
  onWeatherChange(data) {
    logSeparator('ScreenWidget');
    console.log(`SHOW ON SCREEN. Temp: ${data.temperature}°C, hum: ${data.humidity}% and pressure: ${data.pressure}hPa`);
  }
}
