type Coordinate = "up" | "down" | "left" | "right";
let position = { x: 0, y: 0 };

function move(coordinate: Coordinate) {
  if (coordinate === "up") return (position.y += 1);
  else if (coordinate === "down") return (position.y -= 1);
  else if (coordinate === "left") return (position.x -= 1);
  else if (coordinate === "right") return (position.x += 1);
  else throw new Error("Error!!");
}

console.log(position);
move("up");
console.log(position);
move("down");
console.log(position);
move("left");
console.log(position);
move("right");
console.log(position);
