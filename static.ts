export {};

class Person {
  static adultAge = 20;
  // static 키워드 - 각 객체와 상관없이 고정된 값
  constructor(public name: string, public age: number) {}
  sayHello() {
    console.log(`Hello, I'm ${this.name}`);
    console.log(Person.getIsAdult(this.age));
  }
  static getIsAdult(age: number) {
    return Person.adultAge <= age;
  }
}

const person = new Person("jin", 29);
person.sayHello();
console.log(`성인 판단 기준 나이: ${Person.adultAge}`);

// 추상 클래스 - abstract
