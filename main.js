class Coordinate {
  constructor(round, x, y) {
    this.round = round;
    this.x = x;
    this.y = y;
  }
}

var totalDigits = 100;
var coordinates = [];

var x = 0,
  y = 0,
  dx = 0,
  dy = 0,
  round = 0;

while (coordinates.length < totalDigits) {
  x = x + dx;
  y = y + dy;
  var coordinate = new Coordinate(round, x, y);
  coordinates.push(coordinate);

  // dx = dy = 0;
  if (!isEndOfRound(coordinate)) {
    if (isBottom(coordinate)) {
      dx = 1;
      dy = 0;
    } else if (isRight(coordinate)) {
      dx = 0;
      dy = 1;
    } else if (isTop(coordinate)) {
      dx = -1;
      dy = 0;
    } else if (isLeft(coordinate)) {
      dx = 0;
      dy = -1;
    }
  } else {
    round++;
    dx = 0;
    dy = -1;
  }
}

console.table(coordinates);

function isEndOfRound(coordinate) {
  return (
    negativeCompare(coordinate.round, coordinate.x) &&
    negativeCompare(coordinate.round, coordinate.y)
  );
}

function isBottom(coordinate) {
  return (
    negativeCompare(coordinate.round, coordinate.y) &&
    coordinate.x < coordinate.round
  );
}

function isRight(coordinate) {
  return coordinate.round == coordinate.x && coordinate.y < coordinate.round;
}

function isTop(coordinate) {
  return (
    coordinate.round == coordinate.y && coordinate.x > coordinate.round * -1
  );
}

function isLeft(coordinate) {
  return (
    negativeCompare(coordinate.round, coordinate.x) &&
    coordinate.y > coordinate.round * -1
  );
}

function negativeCompare(a, b) {
  return (a == Math.abs(b) && b <= 0) || (b == Math.abs(a) && a <= 0);
}
