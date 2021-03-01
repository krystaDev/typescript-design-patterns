import {ObserverInterface} from "../observable-core/observer";
import {WeatherInfoInterface} from "../../meteo-hardware/weather-info-interface";
import {logSeparator} from "../../../utils";

export class ArchiveWeatherDataAsObserver implements ObserverInterface {
  private archivedEntries = 0;

  notify(data: WeatherInfoInterface) {
    this.archivedEntries += 1;
    logSeparator('ArchiveWeatherData');
    console.log(`Archived DATA - entry number ${this.archivedEntries}. Temp: ${data.temperature}, hum: ${data.humidity} and pressure: ${data.pressure}`);
  }
}
