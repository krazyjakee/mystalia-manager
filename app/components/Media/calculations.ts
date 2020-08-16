type Vector = {
  x: number;
  y: number;
};

export const tileIdToPixels = (
  number: number,
  columns: number,
  tileSize: number = 32
): Vector => {
  const vector = {
    x: (number % columns) * tileSize,
    y: Math.floor(number / columns) * tileSize,
  };
  return number < 0
    ? {
        x: vector.x ? columns * tileSize + vector.x : 0,
        y: vector.y,
      }
    : vector;
};
