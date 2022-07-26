export {};

const size: number = 123;
const isBig: boolean = size >= 100;
const msg: string = isBig ? "크다" : "작다";

const values: number[] = [1, 2, 3];
const values2: Array<number> = [1, 2, 3];
// values.push("a"); // 타입이 맞지 않기 때문에 에러 발생

const data: [string, number] = [msg, size]; // 튜플 타입으로 정의
console.log(data);

let v1: undefined = undefined;
let v2: null = null;
// v1 = 123 // undefined 타입만 가능

let v3: number | undefined = undefined;
// number 또는 undefined 가능함
v3 = 123;

// union 타입을 이용해서 특정한 값만을 가지도록 하게 할 수 있음
let v4: 10 | 20 | 30;
// v4 = 123 // 10, 20, 30 중에 값이 아니기 때문에 에러 발생

// any 타입
let value: any;
value = 123;
value = () => {};
console.log(value);
