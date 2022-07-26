export {};

// function
function f1(): void {
  console.log("hello");
}

function f2(): never {
  // 반환 타입: never일 경우
  // 예외가 발생해서 비상적으로 종료되거나
  // 무한루프 때문에 종료되지 않는 함수의 반환 타입은 never 타입
  throw new Error("some error");
}

// object type
let v: object;
v = { name: "jin" };
console.log(v);
// 객체의 속성값에 접근하면 타입에러 발생 -> interface를 사용해야 함

/** union type */
// union type을 이용해서 두 가지 type 이용하기
type Any = string | number;
let anyValue: Any[] = [];
anyValue.push(123);
anyValue.push("jin");
console.log(anyValue);
