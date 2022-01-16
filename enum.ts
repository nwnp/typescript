export {};

enum Fruit {
  Apple, // 값을 할당하지 않으면 default=0
  Banana = 5, // 값을 할당하지 않으면 이전 원소에서 1만큼 증가한 값이 할당됨
  Orange, // 6
}
// Fruit와 Fruit 안에 있는 아이템들은 각각
// 타입으로 사용될 수 있음

const v1: Fruit = Fruit.Apple;
const v2: Fruit.Apple | Fruit.Banana = Fruit.Banana;
const v3: Fruit = Fruit.Orange;

console.log(v1, v2, v3);

enum Language {
  Korean = "ko",
  English = "en",
  Japanese = "jp",
}

const lang: Language = Language.Korean;
console.log(lang);
