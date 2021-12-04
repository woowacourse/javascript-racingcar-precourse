import {
  USER_ALERT_NO_NAME,
  USER_ALERT_NO_COMMA,
  USER_ALERT_OUT_RANGE,
  USER_ALERT_DUPLICATED,
  USER_ALERT_VACUUM,
} from './constants.js';

export const userInputTypeException = (userInput) => {
  if (!userInput) {
    alert(USER_ALERT_NO_NAME);
  } else if (!userInput.includes(',')) {
    alert(USER_ALERT_NO_COMMA);
  } else {
    return false;
  }

  return true;
};

export const userInputLengthException = (userInputArray) => {
  let isException = false;

  userInputArray.forEach((element) => {
    if (element.length > 5) {
      isException = true;
    }
  });

  if (isException) {
    alert(USER_ALERT_OUT_RANGE);
  }

  return isException;
};

export const userInputDuplicatedException = (userInputArray) => {
  const unduplicatedUserInputSet = new Set(userInputArray);

  if (unduplicatedUserInputSet.size != userInputArray.length) {
    alert(USER_ALERT_DUPLICATED);
    return true;
  }

  return false;
};

export const carNameIsVacuumException = (userInputArray) => {
  let isException = false;

  userInputArray.forEach((element) => {
    if (!element) {
      isException = true;
    }
  });

  if (isException) {
    alert(USER_ALERT_VACUUM);
  }

  return isException;
};
