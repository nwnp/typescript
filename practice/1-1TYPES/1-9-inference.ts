{
  /** Type Inference
   * 타입 추론: 명시하지 않아도 타입을 추론함
   */
  let text: string = "hello";
  function print(
    message: string /** 타입을 명시하지 않으면 any 타입으로 선언됨 */
  ): void {
    console.log(message);
  }

  function add(x: number, y: number) {
    return x + y;
  }
  const result = add(1, 2); // 타입을 명시하지 않아도 number로 됨
  console.log(typeof result);
}
