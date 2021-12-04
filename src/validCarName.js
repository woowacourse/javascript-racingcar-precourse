import {
  MIN_CAR_NAME_LENGTH,
  MAX_CAR_NAME_LENGTH,
} from './constants/constant.js';
import { $carNamesInput } from './constants/HTMLconstant.js';
import {
  TOO_LONG_CAR_NAME,
  TOO_SHORT_CAR_NAME,
} from './constants/errorMessage.js';

const carNameOverFive = carNameGroup =>
  carNameGroup.some(name => name.length > MAX_CAR_NAME_LENGTH);

const carNameUnderOne = carNameGroup =>
  carNameGroup.some(name => name.length < MIN_CAR_NAME_LENGTH);

function alertAndReEnter(errorMessage) {
  alert(errorMessage);
  $carNamesInput.value = '';
  $carNamesInput.focus();
}

export default function validCarNames(carNames) {
  const carNameGroup = carNames.split(',');
  if (carNameOverFive(carNameGroup)) {
    alertAndReEnter(TOO_LONG_CAR_NAME);
    return false;
  }

  if (carNameUnderOne(carNameGroup)) {
    alertAndReEnter(TOO_SHORT_CAR_NAME);
    return false;
  }

  return carNameGroup;
}
