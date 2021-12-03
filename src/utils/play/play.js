import { isMove } from './isMove.js';

export const play = cars => {
  cars.forEach(car => isMove() && car.distance++);
  return cars;
};
