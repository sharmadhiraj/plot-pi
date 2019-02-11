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

  if (!isEndOfRound(round, coordinate)) {
    if (isBottom(round, coordinate)) {
      dx = 1;
      dy = 0;
    } else if (isRight(round, coordinate)) {
      dx = 0;
      dy = 1;
    } else if (isTop(round, coordinate)) {
      dx = -1;
      dy = 0;
    } else if (isLeft(round, coordinate)) {
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

function isEndOfRound(round, coordinate) {
  return (
    negativeCompare(round, coordinate.x) && negativeCompare(round, coordinate.y)
  );
}

function isBottom(round, coordinate) {
  return negativeCompare(round, coordinate.y) && coordinate.x < round;
}

function isRight(round, coordinate) {
  return round == coordinate.x && coordinate.y < round;
}

function isTop(round, coordinate) {
  return round == coordinate.y && coordinate.x > round * -1;
}

function isLeft(round, coordinate) {
  return negativeCompare(round, coordinate.x) && coordinate.y > round * -1;
}

function negativeCompare(a, b) {
  return (a == Math.abs(b) && b <= 0) || (b == Math.abs(a) && a <= 0);
}
