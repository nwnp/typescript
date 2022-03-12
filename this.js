"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getParam(index) {
    // 함수의 첫 파라미터가 this이면 this의 타입이라고 인식을 함
    // 함수의 매개변수는 두 번째 부터 인지를 함
    var params = this.split(",");
    if (index < 0 || params.length <= index) {
        return "";
    }
    return this.split(",")[index];
}
