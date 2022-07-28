{
  // Array
  const fruits: string[] = ["tomato", "banana"];
  const scores: number[] = [1, 2, 3];
  const arrayNumb: Array<number> = [1, 2, 3];

  function printArray(fruits: readonly string[]) {
    // fruits.push(); // readonly 는 변경할 수 없음
  }

  // Tuple (가급적 쓰지 않음) -> interface, type alias, class로 대체해서 사용
  let student: [string, number];
  student = ["name", 123]; // assertion
  student[0]; // access -> name
  student[1]; // access -> 123
  // const [name, age] = student;
}
