import {Processor} from "./processor";

export class NegativeProcessor extends Processor  {
  constructor(processor: Processor){
    super(processor);
  }

  public process(request: number): void {
    if (request < 0) {
      console.log("NegativeProcessor : " + request);
    } else {
      super.process(request);
    }
  }
}
