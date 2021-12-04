import hasDuplicate from '../../utils/hasDuplicate.js';
import toCarNameList from './toCarNameList.js';
import isValidCarName from './isValidCarName.js';

function isValidCarNamesInput(input) {
  const carNames = toCarNameList(input);

  return (
    !hasDuplicate(carNames) &&
    carNames.every((carName) => isValidCarName(carName))
  );
}

export default isValidCarNamesInput;
