var totalDigits = 10000;
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

  dx = dy = 0;
  if (!isEndOfRound(coordinate)) {
    if (isBottom(coordinate)) {
      dx = 1;
    } else if (isRight(coordinate)) {
      dy = 1;
    } else if (isTop(coordinate)) {
      dx = -1;
    } else if (isLeft(coordinate)) {
      dy = -1;
    }
  } else {
    round++;
    dy = -1;
  }
}

// console.table(coordinates);
