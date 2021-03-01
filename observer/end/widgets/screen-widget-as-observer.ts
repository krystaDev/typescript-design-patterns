import {ObserverInterface} from "../observable-core/observer";
import {WeatherInfoInterface} from "../../meteo-hardware/weather-info-interface";
import {logSeparator} from "../../../utils";

export class ScreenWidgetAsObserver implements ObserverInterface {
  notify(data: WeatherInfoInterface) {
    logSeparator('ScreenWidget');
    console.log(`SHOW ON SCREEN. Temp: ${data.temperature}°C, hum: ${data.humidity}% and pressure: ${data.pressure}hPa`);
  }
}
