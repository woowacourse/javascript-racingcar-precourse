import isValidCarNames from './isValidCarNames.js';
import toCarNameList from './toCarNameList.js';

function isValidCarNamesInput(input) {
  const carNameList = toCarNameList(input);
  return isValidCarNames(carNameList);
}

export default isValidCarNamesInput;
