import NUMBER from '../constants/number.js';
import MESSAGE from '../constants/message.js';
import { throwError } from '../utils/error.js';

const isValidatedLength = (userInputArray, givenLength) => {
  if (userInputArray.length >= givenLength) return true;

  throwError(MESSAGE.ERROR.NOT_MEET_CARS_NUM_CONDITION);
};

const isNotDuplicated = (userInputArray) => {
  userInputArray.reduce((acc, cur) => {
    if (acc.includes(cur)) {
      throwError(MESSAGE.ERROR.NOT_MEET_CAR_NAME_CONDITION);
    }

    acc.push(cur);

    return acc;
  }, []);

  return true;
};

export const isValidatedCarNames = (userInputArray) => {
  if (isValidatedLength(userInputArray, NUMBER.MIN_CARS_LENGTH) && isNotDuplicated(userInputArray))
    return true;

  return false;
};

const isNotProperNumber = (userInputString) => {
  return userInputString.startsWith('0');
};

const isLessThanGivenNum = (userInputString, givenNum) => {
  return Number(userInputString) < givenNum;
};

export const isValidatedRacingCount = (userInputString) => {
  if (
    isNotProperNumber(userInputString) ||
    isLessThanGivenNum(userInputString, NUMBER.MIN_RACING_COUNT)
  )
    return false;

  return true;
};

const isLessThanGivenLength = (name, givenLength) => {
  return name.length <= givenLength;
};

const isNotEmpty = (name) => {
  return !!name.trim();
};

export const isValidatedCarName = (name, givenLength) => {
  return isLessThanGivenLength(name, givenLength) && isNotEmpty(name);
};
