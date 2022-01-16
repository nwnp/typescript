"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** function */
// 함수를 만들 때에는 반환 타입도 같이 정의를 해주어야 한다
// 반환을 할 때에는 반환받는 변수의 타입이 일치해야 한다
const getText = function (name, age) {
    return "name: " + name + ", age: " + age;
};
const me = getText("jin", 29);
console.log(me);
/** 선택 매개변수 ? 키워드 */
function test(name, age, Language) {
    if (Language) {
        return "name: " + name + ", age: " + age + ", language: " + Language;
    }
    else {
        return "name: " + name + ", age: " + age;
    }
}
const me2 = test("jin", 29);
const me3 = test("jin", 29, "ko");
// ? 키워드가 있기 때문에 선택적으로 매개변수를 사용할 수 있다.
console.log(me2);
console.log(me3);
