{
  // // JS: add function
  // function jsAdd(num1, num2) {
  //   return num1 + num2;
  // }

  // // TS
  // function tsAdd(num1: number, num2: number) {
  //   return num1 + num2;
  // }

  // // JS: Fetch
  // function jsFetchNum(id) {
  //   console.log(id);
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  // // TS
  // function tsFetchNum(id: string): Promise<number> {
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  // JavaScript => TypeScript
  // 1. Optional parameter (?) : 전달 받을 수도 있고, 전달 받지 않을 수도 있음
  //     => string | undefined로 선언하면, 무조건 undefined도 같이 할당해주어야 한다
  function printName(firstName: string, lastName?: string): void {
    console.log(firstName);
    console.log(lastName);
  }
  printName("Jin", "jeong woo");
  printName("Jin");
  printName("Jin", undefined);
  printName("Jin");

  // Default parameter
  function printMessage(message: string = "default"): void {
    console.log(message);
  }
  printMessage();

  // Rest parameter
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }

  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4));
  console.log(addNumbers(1, 2, 3, 4, 5, 6));
}
