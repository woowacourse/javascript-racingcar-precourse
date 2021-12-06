import { validatedCarNames } from '../utils/validator.js';
import { showRacingCountDiv, showResultDiv } from '../view/display.js';
import { getCarNamesInput } from '../utils/get-user-input.js';
import { makeNewCars } from '../utils/game-utils.js';

export const handleCarNamesSubmitButton = function () {
  const carNamesInputValue = getCarNamesInput();
  const carNamesArray = carNamesInputValue.split(',');

  if (validatedCarNames(carNamesArray)) {
    makeNewCars(carNamesArray);
    showRacingCountDiv();
  }

  return true;
};

export const handleRacingCountSubmitButton = function () {
  const racingCount = getRacingCountInput();

  if (validateRacingCount(racingCount)) {
    showResultDiv();
    appendResultSpanElement();
  }
};
