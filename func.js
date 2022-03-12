"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// function
function f1() {
    console.log("hello");
}
function f2() {
    // 반환 타입: never일 경우
    // 예외가 발생해서 비상적으로 종료되거나
    // 무한루프 때문에 종료되지 않는 함수의 반환 타입은 never 타입
    throw new Error("some error");
}
// object type
var v;
v = { name: "jin" };
console.log(v);
var anyValue = [];
anyValue.push(123);
anyValue.push("jin");
console.log(anyValue);
