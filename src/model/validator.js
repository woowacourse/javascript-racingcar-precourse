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
};

export const isValidatedCount = (userInputNum, countSize) => {
  return userInputNum >= countSize;
};
