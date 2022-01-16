"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Fruit;
(function (Fruit) {
    Fruit[Fruit["Apple"] = 0] = "Apple";
    Fruit[Fruit["Banana"] = 5] = "Banana";
    Fruit[Fruit["Orange"] = 6] = "Orange";
})(Fruit || (Fruit = {}));
// Fruit와 Fruit 안에 있는 아이템들은 각각
// 타입으로 사용될 수 있음
const v1 = Fruit.Apple;
const v2 = Fruit.Banana;
const v3 = Fruit.Orange;
console.log(v1, v2, v3);
var Language;
(function (Language) {
    Language["Korean"] = "ko";
    Language["English"] = "en";
    Language["Japanese"] = "jp";
})(Language || (Language = {}));
const lang = Language.Korean;
console.log(lang);
