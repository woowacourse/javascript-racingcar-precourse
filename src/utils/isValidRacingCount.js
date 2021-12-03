import { VALIDE_CONDITION_RACING_COUNT } from '../const.js';

function isValidRacingCount(count) {
  const { minCount } = VALIDE_CONDITION_RACING_COUNT;
  return Number.isInteger(count) && count >= minCount;
}

export default isValidRacingCount;
