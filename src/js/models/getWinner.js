import { CAR } from '../utils/constants.js';

const getWinner = cars => {
  cars.sort((a, b) => b.move - a.move);
  const winnerMove = cars[CAR.MAX_SCORE_IDX].move;
  const winners = [];

  cars.forEach(car => {
    if (car.move === winnerMove) winners.push(car.name);
  });

  return winners;
};

export default getWinner;
