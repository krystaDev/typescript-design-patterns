# typescript-design-patterns

## Strategy


<dl>
  <dt>Klient przychodzi i mówi:</dt>
  <dd>Potrzebuje symulator psa.Chce wprowadzić różne rasy psów i  chce aby aplikacja pozwala na wykonywanie takich czynności jak: szczczekanie, bieganie i wykonywnie sztuczki</dd>

  <dt>Zatem pierwsza i "oczywiście" idealna propozycja w naszej głowie</dt>
  <dd>Bazowa klasa abstracyjna zawierająca akcje "szczekanie", "bieganie" oraz "sztuczka" następnie klasy podrzędne reprezentujące rasy zawierające odpowiednie nazwy rasów piesków.</dd>

  <dt>Wiec Zabieramy się do implemantacji powstaje poniższy kod:</dt>
  <dd>

```typescript
export abstract class Dog {
  private name: string;
  public bark() {
    console.log('HAU HAU');
  }

  public run() {
    console.log('Dog is catching cat');
  }
}

export class WildDog extends Dog{
  public doTrick() {
    console.log('poop');
  }
}

export class TrainedDog extends Dog {

  public doTrick() {
    console.log('Roll');
  }
}

export class ToyDog extends Dog {

  public doTrick() {
    console.log('Make some funny noise');
  }
}
```
</dd>

<dt>A o to kod wykonawczy powyższych klas:</dt>
<dd>

```typescript
const trainedDog = new TrainedDog();
const wildDog = new WildDog();
const toyDog = new ToyDog();

console.log('TRAINED DOG');
trainedDog.bark();
trainedDog.run();
trainedDog.doTrick();

console.log('WILD DOG');
wildDog.bark();
wildDog.run();
wildDog.doTrick();

console.log('TOY DOG');
toyDog.bark();
toyDog.run();
toyDog.doTrick();
```
</dd>

<dt>oraz wynik wykonania naszego przykładu</dt>
<dd>

```typescript
TRAINED DOG
HAU HAU
Dog is catching cat
Roll
WILD DOG
HAU HAU
Dog is catching cat
poop
TOY DOG
HAU HAU  - co!?!? pies zabawka szczeka??
Dog is catching cat ?!
Make some funny noise - to jest ok - wykonuje śmieszny dźwięk

```
</dd>

</dl>

**Jak widzimy, nie wszystkie pieski mogą wykonywać czynności w ten sam z góry określony sposób. Zatem, jak zaprojektów obiekty aby nie musieć powtarzać fragmentów kodu odpowiedzialne za te same zachowanie danej rasy/rodzaju pieska, jednocześnie pozwalajac na </dt>**






