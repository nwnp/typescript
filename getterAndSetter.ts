export {};

class Person {
  private _name: string = "";

  get name(): string {
    console.log("getter called");
    return this.name;
  }

  set name(newName: string) {
    if (newName.length > 10) {
      throw new Error("최대 길이를 넘김");
    } else {
      this._name = newName;
    }
  }
}

let person = new Person();
person.name = "jin";
console.log(person.name);
person.name = "asdf asdf asdf";
