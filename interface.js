"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 상속
class SomePerson {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    isYoungerThan(age) {
        return this.age < age;
    }
}
