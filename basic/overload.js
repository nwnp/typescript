"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(x, y) {
    if (typeof x === "number" && typeof y === "number") {
        return x + y;
    }
    else {
        var result = Number(x) + Number(y);
        return result.toString();
    }
}
var v1 = add(1, 2);
// 원래라면 number로 return 받을지, string으로 return 받을지 확실하지 않기 때문에
// 에러가 발생을 해야 하는데
// 함수 오버로드를 사용했기 때문에 발생하지 않음
console.log(v1);
// console.log(add(1, "2"));
// number와 string을 동시에 받는 오버로드가 없기 때문에 에러 발생
/** named parameters */
function getText(_a) {
    var name = _a.name, _b = _a.age, age = _b === void 0 ? 15 : _b, language = _a.language;
    var nameText = name.substr(0, 10);
    var ageText = age >= 35 ? "senior" : "junior";
    return "name: ".concat(nameText, ", age: ").concat(ageText, ", lanuguage: ").concat(language);
}
