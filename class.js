"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(name, age) {
        // readonly 키워드를 사용했기 때문에 객체를 생성할 때 제외하고는
        // 절대 수정이 불가능하다
        //#name: string; // private 키워드를 사용했을 때와 같은 의미
        this.age = 0; // 초기값 활당
        // 멤버 변수 초기화
        this.name = name;
        this.age = age;
    }
    Person.prototype.sayHello = function () {
        console.log("hello, I'm ".concat(this.name));
    };
    return Person;
}());
var Programmer = /** @class */ (function (_super) {
    __extends(Programmer, _super);
    // 자식 클래스에서 생성자 함수를 쓰려면
    // super() 사용
    function Programmer(name, age) {
        return _super.call(this, name, age) || this;
    }
    Programmer.prototype.sayHello = function () {
        _super.prototype.sayHello.call(this); // 부모 sayHello() 호출
        console.log("자식 sayHello() 호출");
    };
    Programmer.prototype.fixBug = function () {
        console.log("버그 수정");
    };
    return Programmer;
}(Person));
var programmer = new Programmer("jin", 29);
// programmer.fixBug();
programmer.sayHello();
// console.log(programmer.name, programmer.age);
