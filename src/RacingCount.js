import { racingCountInput } from './elements.js';

import { checkRacingCountInputValid } from './InputValidation.js';

function onInvalidRacingCountInput() {
  alert('잘못 입력하셨습니다. 양의 정수를 입력해 주세요.');
  racingCountInput.value = '';
  racingCountInput.focus();
}

export default function onRacingCountSubmit(event) {
  event.preventDefault();
  const racingCount = racingCountInput.value;
  const racingCountInputValid = checkRacingCountInputValid(racingCount);

  if (!racingCountInputValid) {
    onInvalidRacingCountInput();
  }
}
