{
  /** Type Assertions -> 썩 좋지는 않음
   *
   * 개발자가 type을 100% 확실하게 알고 있을 때 사용
   */
  function isStrFunc(): any {
    return "hello";
    // return 2;
  }

  const result = isStrFunc();
  // result의 type은 string이라고 확실하게 알고 있음
  console.log((result as string).length);

  function findNumbers(): number[] | undefined {
    return undefined;
  }

  // const numbers: number[] = findNumbers();
  // numbers!.push(2);
}
