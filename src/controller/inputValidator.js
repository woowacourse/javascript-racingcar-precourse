import { $ } from '../utils/dom.js';
import { MIN_CAR_NAME_LENGTH, MAX_CAR_NAME_LENGTH } from '../utils/constants.js';

// racingCountInput 유효값 체크
const isNonRacingCount = () => $('#racing-count-input').value == '';
const isNumber = () => !isNaN(Number($('#racing-count-input').value));
const isNegative = () => Number($('#racing-count-input').value) < 0;
const isZero = () => Number($('#racing-count-input').value) === 0;
const isFloat = () => !Number.isInteger(Number($('#racing-count-input').value));

// carNamesInput 유효값 체크
const isNonCarNames = () => $('#car-names-input').value == '';
const isCarNamesInputValidLength = () => {
  const carNamesInput = $('#car-names-input').value.split(',');
  return carNamesInput.every(
    (carName) =>
      !carName.includes(' ') &&
      carName.length >= MIN_CAR_NAME_LENGTH &&
      carName.length <= MAX_CAR_NAME_LENGTH
  );
};

export const isCarNamesInputNonValid = () => {
  return isNonCarNames() || !isCarNamesInputValidLength();
};

export const isRacingCountInputNonValid = () => {
  return isNonRacingCount() || !isNumber() || isNegative() || isZero() || isFloat();
};

// 예외 메시지
export const carNamesInputExceptionMessage = () => {
  alert('자동차 이름을 5자 이하로 콤마로 구분하여 입력해주세요.');
  $('#car-names-input').focus();
};

export const racingCountInputExceptionMessage = () => {
  alert('1 이상의 정수를 입력해주세요.');
  $('#racing-count-submit').focus();
};
