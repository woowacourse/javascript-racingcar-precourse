import {
  MAX_CARNAME_LENGTH,
  MIN_NUMBER_OF_CAR,
  EMPTY,
  MIN_NUMBER_OF_RACINGCOUNT,
} from '../constants/constants.js';
import {
  carNamesDisabled,
  clearCarNamesInput,
  racingCountDisabled,
} from './get-user-input.js';

function validateUserInput1(userInputValue) {
  let isValid = false;
  userInputValue.forEach((name) => {
    if (name.length > MAX_CARNAME_LENGTH) {
      alert('등록된 자동차 중 글자수가 5자를 초과하는 자동차 이름이 있습니다.');
    } else if (name.includes(' ')) {
      alert('자동차 이름에 공백은 포함될 수 없습니다.');
    } else if (name.length === EMPTY) {
      alert('등록된 자동차중 공백이 포함되어있는지 확인해주세요. ex) BMW, ,');
    } else {
      isValid = true;
    }
  });
  return isValid;
}

function validateUserInput2(userInputValue) {
  let isValid = false;
  if (userInputValue.length < MIN_NUMBER_OF_CAR) {
    alert('게임진행을 위해 2개 이상의 자동차를 입력해 주세요.');
  } else if (userInputValue.length !== new Set(userInputValue).size) {
    alert('등록된 자동차 중 중복된 이름이 있는지 확인해 주세요.');
  } else {
    isValid = true;
  }

  return isValid;
}

export function validatedCarNames(userInputValue) {
  const validation1 = validateUserInput1(userInputValue);
  const validation2 = validateUserInput2(userInputValue);
  let isValidated = false;

  if ((validation1, validation2)) {
    carNamesDisabled();
    isValidated = true;
  } else {
    clearCarNamesInput();
    isValidated;
  }
  return isValidated;
}

export function validateRacingCount(racingCount) {
  let isValid = false;
  if (racingCount < MIN_NUMBER_OF_RACINGCOUNT) {
    alert('0 이상의 정수를 입력해 주세요.');
    clearRacingCountInput();
  } else {
    racingCountDisabled();
    isValid = true;
  }

  return isValid;
}
