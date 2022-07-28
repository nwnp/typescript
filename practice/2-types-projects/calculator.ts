type Arithmetic = "add" | "substract" | "multiply" | "divide" | "remainder";

function calculate(arithmetic: Arithmetic, num1: number, num2: number): number {
  if (arithmetic === "add") return num1 + num2;
  else if (arithmetic === "multiply") return num1 * num2;
  else if (arithmetic === "substract") return num1 - num2;
  else if (arithmetic === "divide") return num1 / num2;
  else if (arithmetic === "remainder") return num1 % num2;
  else throw new Error("unknown error");
}

console.log(calculate("add", 1, 3));
console.log(calculate("substract", 3, 1));
console.log(calculate("multiply", 4, 2));
console.log(calculate("divide", 4, 2));
console.log(calculate("remainder", 5, 2));
