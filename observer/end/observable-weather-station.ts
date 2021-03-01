import {HardWareOfWeatherStation} from "../meteo-hardware/hard-ware-of-weather-station";
import {WeatherInfoInterface} from "../meteo-hardware/weather-info-interface";
import {ObserverInterface} from "./observable-core/observer";
import {logSeparator} from "../../utils";

export class ObservableWeatherStation extends HardWareOfWeatherStation {
  private observers: ObserverInterface[] = [];

  updateObservers(data: WeatherInfoInterface) {
    this.observers.forEach((observer) => {
      observer.notify(data);
    });
  }

  public addNewObserver(observer: ObserverInterface) {
    this.observers.push(observer);
  }

  public removeObserver(observer: ObserverInterface) {
    this.observers = this.observers.filter(t => t !== observer);
  }

  public onChangeValues(data: WeatherInfoInterface): void {
    logSeparator(new Date().toLocaleTimeString('pl'));
    this.updateObservers(data);
  }
}
