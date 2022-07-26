"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person() {
        this._name = "";
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            console.log("getter called");
            return this.name;
        },
        set: function (newName) {
            if (newName.length > 10) {
                throw new Error("최대 길이를 넘김");
            }
            else {
                this._name = newName;
            }
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var person = new Person();
person.name = "jin";
console.log(person.name);
person.name = "asdf asdf asdf";
