export {};

class Person1 {
  name: string;
  age?: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Child extends Person1 {
  constructor(name: string, age: number) {
    super(name, age);
  }
}

const person = new Person1("jin", 29);
const child = new Child("jin", 29);
console.log(person);
console.log(child);
