import {WeatherInfoInterface} from "./weather-info-interface";
import {getRandomNumbersInRange} from "../../utils";

export class HardWareOfWeatherStation {
  private readonly interval;
  private countsLimit = 10;
  private intervalTime = 1000;
  private intervalCounts = 0;
  constructor() {

    // IMITATION on hardware signals
    this.interval = setInterval((index) => {
      this.onChangeValues(this.readValues());

      this.intervalCounts += 1;

      if (this.intervalCounts >= this.countsLimit) {
        clearInterval(this.interval);
      }
    }, this.intervalTime);
  }

  public onChangeValues(data: WeatherInfoInterface): void {
    console.log(this.readValues());
  }

  private readValues(): WeatherInfoInterface {
    return {
      humidity: this.readHumidity(),
      pressure: this.readPressure(),
      temperature: this.readTemperature()
    };
  }

  private readPressure(): number {
    return Math.round(getRandomNumbersInRange(800, 1100));
  }

  private readHumidity(): number {
    return Math.round(getRandomNumbersInRange(0, 100));
  }
  private readTemperature(): number {
    return Math.round(getRandomNumbersInRange(-20, 40) * 100) / 100;
  }
}
