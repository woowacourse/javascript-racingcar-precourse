import { MAX_CAR_NAME_LENGTH, ALERT_MESSAGE } from '../constants.js';
import stringToArrayConverter from './stringToArrayConverter.js';

function isEmpty(carNames) {
  if (carNames.length === 0) {
    return true;
  }
  return false;
}

function isValidLength(carNames) {
  for (let i = 0; i < carNames.length; i++) {
    if (carNames[i].length > MAX_CAR_NAME_LENGTH || carNames[i].length === 0) {
      return false;
    }
  }
  return true;
}

export default function isValidCarNames(carNamesString) {
  const carNames = stringToArrayConverter(carNamesString);
  if (isEmpty(carNames) || !isValidLength(carNames)) {
    alert(ALERT_MESSAGE.nameAlert);
    return false;
  }

  return true;
}
