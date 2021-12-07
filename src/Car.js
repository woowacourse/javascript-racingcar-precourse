import { carNamesInput } from './elements.js';

import checkCarNamesInputValid from './InputValidation.js';

function onInvalidCarNamesInput() {
  alert('잘못 입력하셨습니다. 자동차 이름을 5자 이하로 입력해 주세요.');
  carNamesInput.focus();
}

export default function onCarNamesSubmit(event) {
  event.preventDefault();
  const carNames = carNamesInput.value.split(',');
  const carNamesInputValid = checkCarNamesInputValid(carNames);

  if (!carNamesInputValid) {
    onInvalidCarNamesInput();
  }
}
