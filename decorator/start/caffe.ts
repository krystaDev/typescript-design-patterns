export enum Additions {
  milk = 'milk',
  chocolate = 'chocolate',
  cookie = 'cookie',
  coconutMilk = 'coconutMilk'
}

export const prices = [
  {name: Additions.milk, price: 0.99},
  {name: Additions.chocolate, price: 1.99},
  {name: Additions.cookie, price: 2.99},
  {name: Additions.coconutMilk, price: 1.49},
];

export abstract class Caffe {
  private readonly cost =  {};
  private readonly description;
  private additions : Additions[] = [];

  protected constructor(description: string) {
    this.description = description;
    prices.forEach((element) => {
      this.cost[element.name] = element.price;
    });
  }

  public getCost(): number {
    let result = 0;

    this.additions.forEach((element) => {
      if (this.cost.hasOwnProperty(element)) {
        result += this.cost[element];
      }
    });

    return result;
  }

  public addMilk() {
    this.additions.push(Additions.milk);
  }

  public addChocolate() {
    this.additions.push(Additions.chocolate);
  }

  public addCookie() {
    this.additions.push(Additions.cookie);
  }

  public addCoconutMilk() {
    this.additions.push(Additions.coconutMilk);
  }

  public getDescription() {
    return this.description;
  }
}
