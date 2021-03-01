export function logSeparator(value: string): void {
  console.log(`------------${value}------------`);
}


export function getRandomNumbersInRange(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}
