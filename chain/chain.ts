import {Processor} from "./processor";
import {NegativeProcessor} from "./nagative-processor";
import {ZeroProcessor} from "./zero-processor";
import {PositiveProcessor} from "./positive-processor";

export class Chain {
  public chain: Processor;

  constructor() {
    this.buildChain();
  }

  private buildChain(): void {
    this.chain = new NegativeProcessor(new ZeroProcessor(new PositiveProcessor(null)));
  }

  public process(request: number): void {
    this.chain.process(request);
  }
}
