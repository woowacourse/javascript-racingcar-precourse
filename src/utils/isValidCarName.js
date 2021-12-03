import isInRange from './isInRange.js';
import { VALID_CONDITION_CAR_NAME } from '../const.js';

function isValidLength(len) {
  const { minLength, maxLength } = VALID_CONDITION_CAR_NAME;
  return isInRange(len, minLength, maxLength);
}

function isValidCarName(carName) {
  return isValidLength(carName.length);
}

export default isValidCarName;
