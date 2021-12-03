import $ from '../common/selector.js';
import { play } from './play.js';

export const playAll = (cars, count) => {
  let result = [];

  for (let i = 0; i < count; i++) {
    result = play(cars);
  }

  let winner = [];
  const max = Math.max(...result.map(item => item.distance), 0);
  result.forEach(item => item.distance === max && winner.push(item.name));

  $('#racing-winners').innerHTML = `최종 우승자: ${winner.join(', ')}`;
  return winner;
};
