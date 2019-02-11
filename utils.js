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
  