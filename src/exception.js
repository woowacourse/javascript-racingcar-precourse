import {
  USER_ALERT_NO_NAME,
  USER_ALERT_NO_COMPETITOR,
  USER_ALERT_NO_COMMA,
  USER_ALERT_OUT_RANGE,
  USER_ALERT_DUPLICATED,
  USER_ALERT_VACUUM,
  USER_ALERT_NO_COUNT,
} from './constants.js';

export const userInputTypeException = (userInput) => {
  if (!userInput) {
    alert(USER_ALERT_NO_NAME);
  } else if (userInput.length <= 5 && !userInput.includes(',')) {
    alert(USER_ALERT_NO_COMPETITOR);
  } else if (userInput.length > 5 && !userInput.includes(',')) {
    alert(USER_ALERT_NO_COMMA);
  } else {
    return false;
  }

  return true;
};

export const userInputLengthException = (userInputArray) => {
  let _isException = false;

  userInputArray.forEach((element) => {
    if (element.length > 5) {
      _isException = true;
    }
  });

  if (_isException) {
    alert(USER_ALERT_OUT_RANGE);
  }

  return _isException;
};

export const userInputDuplicatedException = (userInputArray) => {
  const _unduplicatedUserInputSet = new Set(userInputArray);

  if (_unduplicatedUserInputSet.size != userInputArray.length) {
    alert(USER_ALERT_DUPLICATED);
    return true;
  }

  return false;
};

export const carNameIsVacuumException = (userInputArray) => {
  let _isException = false;

  userInputArray.forEach((element) => {
    if (!element) {
      _isException = true;
    }
  });

  if (_isException) {
    alert(USER_ALERT_VACUUM);
  }

  return _isException;
};

export const noCountException = () => {
  alert(USER_ALERT_NO_COUNT);
};
