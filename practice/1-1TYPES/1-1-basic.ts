{
  /**
   * JavaScript
   * Primitive: number, string, boolean, bigint, symbol, null, undefined
   * Object: function, array
   */
  /**
   * TypeScript
   */

  // number
  const num: number = 1;

  // string
  const str: string = "hello world!";

  // boolean
  const bool: boolean = true;

  // undefined: 값이 있는지 없는지 아무것도 결정되지 않은 상태
  let name: undefined; // undefined 로 선언하면 undefined만 할당 가능
  let age: number | undefined; // number or undefined
  age = undefined;
  age = 1;

  function find(): null | undefined {
    return undefined;
  }

  // null: undefined 보다 명확하게 비어있는 것을 의미함
  let person: null; // null만 할당 가능
  let jin: null | string;
  jin = null;
  jin = "jjw";

  // unknown: 어떤 데이터 타입이 할당될지 모를 때(가급적 쓰지 않는게 좋음)
  let notSure: unknown;
  notSure = 1;
  notSure = "hello world!";

  // any(가급적 쓰지 않는게 좋음)
  let anything: any = 0;
  anything = "hello world!";

  // void: 아무것도 반환하지 않을 때
  function print(): void {
    console.log("hello");
  }

  // obejct: Primitive type을 제외한 모든 타입(가급적 쓰지 않는게 좋음)
  let obj: object;
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: "jin" });
  acceptSomeObject({ animal: "puppy" });
}
