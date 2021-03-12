export abstract class Pizza {
  protected name: string;
  protected dough: string;
  protected sauce: string;

  protected extras: string[] = [];

  prepare(): void {
    console.log('Pizza is preparing');
  }

  bake(): void {
    console.log('Pizza is baked');
  }

  slice(): void {
    console.log('Pizza is sliced');
  }

  pack(): void {
    console.log('Pizza is packed');
  }
}
