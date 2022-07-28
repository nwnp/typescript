{
  /**
   * Type Alias
   */
  type Text = string;
  type Num = number;
  type Student = { name: string; age: number };
  const name: Text = "jin";
  const address: Text = "korea";
  const num: Num = 1;
  const student: Student = { name: "jin", age: 29 };
  console.log(name, address, num, student);

  /**
   * String Literal Types
   */
  type Name = "name";
  let jinName: Name;
  jinName = "name";

  type Bool = true;
  const bool: Bool = true; // true만 할당할 수 있음
  // const boolError: Bool = false;
}
