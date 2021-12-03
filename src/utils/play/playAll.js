import { play } from './play.js';

export const playAll = (cars, count) => {
  let result = [];

  for (let i = 0; i < count; i++) {
    result = play(cars);
  }

  return result;
};
