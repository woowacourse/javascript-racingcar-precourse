import {
  userInputTypeException,
  userInputLengthException,
  userInputDuplicatedException,
  carNameIsVacuumException,
} from './exception.js';

export const getUserInputForCarNames = () => {
  return document.getElementById('car-names-input').value.toString();
};

const userInputStringToArrayConverter = (userInput) => {
  const userInputNoVacuum = userInput.replaceAll(' ', '');
  const userInputArray = userInputNoVacuum.split(',');

  return userInputArray;
};

export const getUserInputArray = (userInput) => {
  const userInputArray = userInputStringToArrayConverter(userInput);
  const hasExceptionArray = [];

  if (
    userInputTypeException(userInput) ||
    userInputLengthException(userInputArray) ||
    carNameIsVacuumException(userInputArray) ||
    userInputDuplicatedException(userInputArray)
  ) {
    return hasExceptionArray;
  }

  return userInputArray;
};

export const getUserInputForCount = () => {
  return Number(document.getElementById('racing-count-input').value);
};
