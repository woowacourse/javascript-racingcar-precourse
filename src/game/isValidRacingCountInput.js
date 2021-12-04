import { VALIDE_CONDITION_RACING_COUNT } from './const.js';

function isValidRacingCountInput(input) {
  const count = Number(input);
  const { min } = VALIDE_CONDITION_RACING_COUNT;

  return Number.isInteger(count) && count >= min;
}

export default isValidRacingCountInput;
