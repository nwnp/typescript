export {};

// add 함수 작성하기
// 두 매개변수가 모두 문자열이면 문자열을 반환
// 두 매개변수가 모두 숫자이면 숫자를 반환
// 두 매개변수를 서로 다른 타입으로 입력하면 안됨

/** 함수 오버로드 사용하기 */
function add(x: number, y: number): number;
function add(x: string, y: string): string;
function add(x: number | string, y: number | string): number | string {
  if (typeof x === "number" && typeof y === "number") {
    return x + y;
  } else {
    const result = Number(x) + Number(y);
    return result.toString();
  }
}

const v1: number = add(1, 2);
// 원래라면 number로 return 받을지, string으로 return 받을지 확실하지 않기 때문에
// 에러가 발생을 해야 하는데
// 함수 오버로드를 사용했기 때문에 발생하지 않음
console.log(v1);

// console.log(add(1, "2"));
// number와 string을 동시에 받는 오버로드가 없기 때문에 에러 발생

/** named parameters */
function getText({
  name,
  age = 15,
  language,
}: {
  name: string;
  age?: number;
  language?: string;
}): string {
  const nameText = name.substr(0, 10);
  const ageText = age >= 35 ? "senior" : "junior";
  return `name: ${nameText}, age: ${ageText}, lanuguage: ${language}`;
}
