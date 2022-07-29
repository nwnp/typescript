{
  type CoffeCup = {
    shots: number;
    hasMilk: boolean;
  };

  const BEANS_GRAM_PER_SHOT: number = 7;
  let coffeeBeans: number = 0;

  function makeCoffee(shots: number): CoffeCup {
    if (coffeeBeans < shots * BEANS_GRAM_PER_SHOT)
      throw new Error("Not enough coffe beans!");

    coffeeBeans -= shots * BEANS_GRAM_PER_SHOT;
    return { shots, hasMilk: false };
  }

  coffeeBeans += 3 * BEANS_GRAM_PER_SHOT;
  const coffee = makeCoffee(2);
  console.log(coffee);
}
