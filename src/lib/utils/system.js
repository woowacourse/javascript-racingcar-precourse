const { POINT } = require('../constants/system');

const isGoOrStop = (randomNumber) => randomNumber >= POINT;
const carMoveSort = (prev, curr) => (curr.getMove() - prev.getMove());
const winFilter = (car, max) => car.getMove() === max.getMove();
module.exports = {
  carMoveSort,
  isGoOrStop,
  winFilter,
};
