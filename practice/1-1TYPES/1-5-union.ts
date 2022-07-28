{
  /** Union Type :== Or */
  type Direction = "left" | "right" | "up" | "down"; // 4가지 중 하나의 값만 가질 수 있음
  function move(direction: Direction) {
    console.log(direction);
  }
  move("right");

  type TileSize = 8 | 16 | 32;
  // const tile: TileSize = 1 -> error
  const tile: TileSize = 8;
}
