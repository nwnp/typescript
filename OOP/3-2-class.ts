{
  type CoffeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    private static readonly BEANS_GRAM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    // 생성자 첫 번째 방법
    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    makeCoffee(shots: number): CoffeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT)
        throw new Error("Not enough coffe beans!");

      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
      return { shots, hasMilk: false };
    }
  }

  const coffeeMaker = new CoffeeMaker(32);
  console.log(coffeeMaker);
}
