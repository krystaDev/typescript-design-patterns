import {HardWareOfWeatherStation} from "../meteo-hardware/hard-ware-of-weather-station";
import {WeatherInformationInterface} from "./widgets/weather-information-interface";
import {WeatherInfoInterface} from "../meteo-hardware/weather-info-interface";

export class WeatherStation extends HardWareOfWeatherStation {

  private readonly archive: WeatherInformationInterface;
  private readonly screen: WeatherInformationInterface;

  constructor(archive: WeatherInformationInterface, screen: WeatherInformationInterface) {
    super();
    this.archive = archive;
    this.screen = screen;
  }

  public onChangeValues(data: WeatherInfoInterface): void {
    this.archive.onWeatherChange(data);
    this.screen.onWeatherChange(data);
  }
}
