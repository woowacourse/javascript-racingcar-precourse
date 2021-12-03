import { RANGE_MOVABLE } from '../const.js';

function isMovable(num) {
  const { min } = RANGE_MOVABLE;
  return num >= min;
}

export default isMovable;
