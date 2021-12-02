import stringToArrayConverter from './stringToArrayConverter.js';

function isEmpty(carNames) {
  if (carNames.length === 0) {
    return true;
  }
  return false;
}

function isValidLength(carNames) {
  for (let i = 0; i < carNames.length; i++) {
    if (carNames[i].length > 5 || carNames[i].length === 0) {
      return false;
    }
  }
  return true;
}

export default function isValidCarNames(carNamesString) {
  const carNames = stringToArrayConverter(carNamesString);
  if (isEmpty(carNames) || !isValidLength(carNames)) {
    alert('자동차 이름을 5자 이하로 콤마로 구분하여 입력해주세요.');
    return false;
  }

  return true;
}
