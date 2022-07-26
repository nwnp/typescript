/** interface */
// 인터페이스로 타입을 정의
export {};

// 객체 정의
interface Person {
  name: string;
  age: number; // 선택 속성
  isYoungerThan(age: number): boolean;
}

// 인터페이스로 함수 정의
interface GetText {
  (name: string, age: number): string;
  totalCall?: number; // 속성값
}

// 상속
class SomePerson implements Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  isYoungerThan(age: number) {
    return this.age < age;
  }
}
