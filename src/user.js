import {
  userInputTypeException,
  userInputLengthException,
  userInputDuplicatedException,
  carNameIsVacuumException,
  countOutRangeException,
  countInvalidException,
} from './exception.js';
import { carNamesInput, racingCountInput } from './dom_element.js';

export const getUserInputForCarNames = () => carNamesInput.value.toString();

const userInputStringToArrayConverter = (userInput) => {
  const _userInputNoVacuum = userInput.replaceAll(' ', '');
  const _userInputArray = _userInputNoVacuum.split(',');

  return _userInputArray;
};

export const getUserInputArray = (userInput) => {
  const _userInputArray = userInputStringToArrayConverter(userInput);
  const _hasExceptionArray = [];

  if (
    userInputTypeException(userInput) ||
    userInputLengthException(_userInputArray) ||
    carNameIsVacuumException(_userInputArray) ||
    userInputDuplicatedException(_userInputArray)
  ) {
    return _hasExceptionArray;
  }

  return _userInputArray;
};

export const getUserInputForCount = () => {
  const _userInputForCount = Number(racingCountInput.value);

  if (
    countOutRangeException(_userInputForCount) ||
    countInvalidException(_userInputForCount)
  ) {
    return 0;
  }

  return _userInputForCount;
};
