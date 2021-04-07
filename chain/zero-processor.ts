import {Processor} from "./processor";

export class ZeroProcessor extends Processor {
  constructor(processor: Processor) {
    super(processor);
  }

  public process(request: number): void {
    if (request === 0) {
      console.log("ZeroProcessor : " + request);
    } else {
      super.process(request);
    }
  }
}
