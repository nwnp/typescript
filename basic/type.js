"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var size = 123;
var isBig = size >= 100;
var msg = isBig ? "크다" : "작다";
var values = [1, 2, 3];
var values2 = [1, 2, 3];
// values.push("a"); // 타입이 맞지 않기 때문에 에러 발생
var data = [msg, size]; // 튜플 타입으로 정의
console.log(data);
var v1 = undefined;
var v2 = null;
// v1 = 123 // undefined 타입만 가능
var v3 = undefined;
// number 또는 undefined 가능함
v3 = 123;
// union 타입을 이용해서 특정한 값만을 가지도록 하게 할 수 있음
var v4;
// v4 = 123 // 10, 20, 30 중에 값이 아니기 때문에 에러 발생
// any 타입
var value;
value = 123;
value = function () { };
console.log(value);
