import { ERROR, DONE } from '../data/constants.js';

const isOnlyNumber = (value) => /^[0-9]*$/g.test(value) && value > 0;

const isSplitComma = (value) => value.indexOf(',') > -1;

const isLengthLimit = (value) => {
  const nameList = value.split(',');
  const validList = nameList.filter((item) => /^.{1,5}$/g.test(item.trim()));

  return validList.length === nameList.length;
};

const isUniqueName = (value) => {
  const nameList = value.split(',');
  const uniqueSet = new Set();

  nameList.forEach((name) => uniqueSet.add(name.trim()));
  return nameList.length === uniqueSet.size;
};

export const checkNameVaild = (userInput) => {
  if (isSplitComma(userInput) === false) {
    return ERROR.USERINPUT_NEED_COMMA;
  }
  if (isLengthLimit(userInput) === false) {
    return ERROR.USERINPUT_LENGTH_LIMIT;
  }
  if (isUniqueName(userInput) === false) {
    return ERROR.USERINPUT_UNIQUE_NAME;
  }

  return DONE.USERINPUT_NAME;
};

export const checkCountVaild = (userInput) => {
  if (userInput === '' || isOnlyNumber(userInput) === false) {
    return ERROR.USERINPUT_COUNT_NUMBER_ONLY;
  }

  return DONE.USERINPUT_COUNT;
};
