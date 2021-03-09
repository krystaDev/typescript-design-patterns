export abstract class Caffe {
  protected description = 'No name caffe';

  public getDescription(): string {
    return this.description;
  }

  public abstract getCost(): number;
}
