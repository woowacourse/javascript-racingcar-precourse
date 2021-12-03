import hasDuplicate from '../../utils/hasDuplicate.js';
import isValidCarName from './isValidCarName.js';

function isValidCarNames(carNames) {
  return (
    !hasDuplicate(carNames) &&
    carNames.every((carName) => isValidCarName(carName))
  );
}

export default isValidCarNames;
