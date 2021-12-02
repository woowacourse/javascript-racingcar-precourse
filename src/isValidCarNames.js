import stringToArrayConverter from './stringToArrayConverter.js';

export default function isValidCarNames(carNamesString) {
  const carNames = stringToArrayConverter(carNamesString);
  if (carNames.length === 0) {
    return false;
  }

  for (let i = 0; i < carNames.length; i++) {
    if (carNames[i].length > 5 || carNames[i].length === 0) {
      return false;
    }
  }

  return true;
}
