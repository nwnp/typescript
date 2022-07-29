{
  type CoffeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    private static readonly BEANS_GRAM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    fildCoffeeBeans(coffeeBeans: number) {
      if (coffeeBeans < 0)
        throw new Error("value for beans should be greater than 0");
      this.coffeeBeans += coffeeBeans;
    }

    makeCoffee(shots: number): CoffeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT)
        throw new Error("Not enough coffe beans!");

      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
      return { shots, hasMilk: false };
    }
  }

  class User {
    // 생성자 두 번째 방법
    constructor(private firstName: string, private lastName: string) {}
    private internalAge = 4;

    get age(): number {
      return this.internalAge;
    }

    set age(num: number) {
      if (num < 0) throw new Error("0보다 작을 수 없음");
      this.internalAge = num;
    }

    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
  }

  const coffeeMaker = CoffeeMaker.makeMachine(32);
  console.log(coffeeMaker);

  const user = new User("jin", "jeong woo");
  user.age = 29;
  console.log(user);
}
