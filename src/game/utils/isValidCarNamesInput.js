import isValidCarNames from './isValidCarNames.js';
import toCarNameList from './toCarNameList.js';

function isValidCarNamesInput(input) {
  return isValidCarNames(toCarNameList(input));
}

export default isValidCarNamesInput;
