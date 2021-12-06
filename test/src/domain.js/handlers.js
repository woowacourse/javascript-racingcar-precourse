import { validatedCarNames } from '../utils/validator.js';
import { showRacingCountDiv } from '../view/display.js';
import { getCarNamesInput } from '../utils/get-user-input.js';

export const handleCarNamesSubmitButton = function () {
  const carNamesInputValue = getCarNamesInput();
  const carNamesArray = carNamesInputValue.split(',');

  if (validatedCarNames(carNamesArray)) {
    showRacingCountDiv();
  }

  return true;
};
