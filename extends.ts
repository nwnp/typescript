export {};

interface Person {
  name: string;
  age: number;
}

// extends로 상속
interface Korean extends Person {
  isLiveInIncheon: boolean;
}
/**
 * interface Korean {
 *  name: string;
 *  age: number;
 *  isLiveinIncheon: boolean;
 * }
 */

interface Programmer {
  favoriteProgrammingLanugage: string;
}

interface Korean2 extends Person, Programmer {
  isLiveInSeoul: boolean;
}

// 교차 타입 (& 키워드)
interface Product {
  name: string;
  price: number;
}

type PP = Person & Product;
const pp: PP = {
  name: "a",
  age: 23,
  price: 2000,
};
console.log(pp);
