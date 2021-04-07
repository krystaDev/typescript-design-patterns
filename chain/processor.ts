export abstract class Processor {
  private processor: Processor;

  protected constructor(processor: Processor){
    this.processor = processor;
  }

  public process(request: number): void {
    if (this.processor != null)
      this.processor.process(request);
  }
}
