export {};

class Person {
  public readonly name: string;
  // readonly 키워드를 사용했기 때문에 객체를 생성할 때 제외하고는
  // 절대 수정이 불가능하다

  //#name: string; // private 키워드를 사용했을 때와 같은 의미
  age: number = 0; // 초기값 활당
  constructor(name: string, age: number) {
    // 멤버 변수 초기화
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`hello, I'm ${this.name}`);
  }
}

class Programmer extends Person {
  // 자식 클래스에서 생성자 함수를 쓰려면
  // super() 사용
  constructor(name: string, age: number) {
    super(name, age);
  }
  sayHello() {
    super.sayHello(); // 부모 sayHello() 호출
    console.log("자식 sayHello() 호출");
  }
  fixBug() {
    console.log("버그 수정");
  }
}

const programmer = new Programmer("jin", 29);
// programmer.fixBug();
programmer.sayHello();
// console.log(programmer.name, programmer.age);
