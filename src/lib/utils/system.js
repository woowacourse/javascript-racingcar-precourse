const isGoOrStop = (randomNumber) => randomNumber >= 4;
const carMoveSort = (prev, curr) => (curr.getMove() - prev.getMove());
const winFilter = (car, max) => car.getMove() === max.getMove();
module.exports = {
  carMoveSort,
  isGoOrStop,
  winFilter,
};
