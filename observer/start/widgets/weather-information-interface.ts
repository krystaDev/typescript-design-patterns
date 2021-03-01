import {WeatherInfoInterface} from "../../meteo-hardware/weather-info-interface";

export interface WeatherInformationInterface {
  onWeatherChange(data: WeatherInfoInterface);
}
