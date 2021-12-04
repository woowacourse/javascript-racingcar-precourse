import isInRange from '../../utils/isInRange.js';
import isWhiteSpaces from '../../utils/isWhiteSpaces.js';
import hasWhiteSpaceAtEnd from '../../utils/hasWhiteSpaceAtEnd.js';
import { VALID_CONDITION_CAR_NAME } from '../const.js';

function isValidLength(len) {
  const { minLength, maxLength } = VALID_CONDITION_CAR_NAME;
  return isInRange(len, minLength, maxLength);
}

function isValidCarName(carName) {
  return (
    isValidLength(carName.length) &&
    !isWhiteSpaces(carName) &&
    !hasWhiteSpaceAtEnd(carName)
  );
}

export default isValidCarName;
