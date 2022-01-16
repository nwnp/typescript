"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const size = 123;
const isBig = size >= 100;
const msg = isBig ? "크다" : "작다";
const values = [1, 2, 3];
const values2 = [1, 2, 3];
// values.push("a"); // 타입이 맞지 않기 때문에 에러 발생
const data = [msg, size]; // 튜플 타입으로 정의
console.log(data);
let v1 = undefined;
let v2 = null;
// v1 = 123 // undefined 타입만 가능
let v3 = undefined;
// number 또는 undefined 가능함
v3 = 123;
// union 타입을 이용해서 특정한 값만을 가지도록 하게 할 수 있음
let v4;
// v4 = 123 // 10, 20, 30 중에 값이 아니기 때문에 에러 발생
// any 타입
let value;
value = 123;
value = () => { };
console.log(value);
