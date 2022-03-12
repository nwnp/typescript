"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    // static 키워드 - 각 객체와 상관없이 고정된 값
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.sayHello = function () {
        console.log("Hello, I'm ".concat(this.name));
        console.log(Person.getIsAdult(this.age));
    };
    Person.getIsAdult = function (age) {
        return Person.adultAge <= age;
    };
    Person.adultAge = 20;
    return Person;
}());
var person = new Person("jin", 29);
person.sayHello();
console.log("\uC131\uC778 \uD310\uB2E8 \uAE30\uC900 \uB098\uC774: ".concat(Person.adultAge));
// 추상 클래스 - abstract
