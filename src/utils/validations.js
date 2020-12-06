import { showInputError } from "./domUtil.js";
import { MESSAGE, NUM } from "./constants.js";

const isEmptyInput = nameList => !nameList.length;

const isValidCarNames = nameList => {
  return nameList.every(name => name.length <= NUM.NAME_LIMIT);
};

const isDuplicatedNames = nameList => {
  const nameSet = new Set(nameList);

  return nameList.length !== nameSet.size;
};

const isPositiveNumber = num => parseInt(num) > 0;

export const isVaildNamesInput = ($input, names) => {
  if (isEmptyInput(names)) {
    showInputError($input, MESSAGE.EMPTY_INPUT_ERROR);
    return false;
  }

  if (isDuplicatedNames(names)) {
    showInputError($input, MESSAGE.DUPLICATED_INPUT_ERROR);
    return false;
  }

  if (!isValidCarNames(names)) {
    showInputError($input, MESSAGE.NAME_INPUT_ERROR);
    return false;
  }

  return true;
};

export const isValidCountInput = ($input, round) => {
  if (isEmptyInput(round)) {
    showInputError($input, MESSAGE.EMPTY_INPUT_ERROR);
    return false;
  }

  if (!isPositiveNumber(round)) {
    showInputError($input, MESSAGE.NEGATIVE_NUMBER_ERROR);
    return false;
  }

  return true;
};
