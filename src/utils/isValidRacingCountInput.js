import isValidRacingCount from './isValidRacingCount.js';

function isValidRacingCountInput(input) {
  const count = Number(input);
  if (!Number.isInteger(count)) return false;

  return isValidRacingCount(count);
}

export default isValidRacingCountInput;
