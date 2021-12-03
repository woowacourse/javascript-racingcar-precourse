import { $, $$, initDOM, showRacingCountInput } from './utils/dom.js';
import {
  isCarNamesInputNonValid,
  isRacingCountInputNonValid,
  carNamesInputExceptionMessage,
  racingCountInputExceptionMessage,
} from './controller/inputValidator.js';
import { renderGameResult } from './controller/controller.js';

// 입력 값
export const getCarNamesInput = () => {
  return $('#car-names-input').value.split(',');
};

export const getRacingCountInput = () => {
  return Number($('#racing-count-input').value);
};

// 초기 display 설정
initDOM();

// 이벤트 설정
$$('form').forEach((form) =>
  form.addEventListener('submit', function (e) {
    e.preventDefault();
  })
);

$('#car-names-submit').addEventListener('click', function (e) {
  if (isCarNamesInputNonValid()) {
    carNamesInputExceptionMessage();
    return;
  }

  showRacingCountInput();
});

$('#racing-count-submit').addEventListener('click', function (e) {
  if (isCarNamesInputNonValid()) {
    carNamesInputExceptionMessage();
    return;
  }

  if (isRacingCountInputNonValid()) {
    racingCountInputExceptionMessage();
    return;
  }

  renderGameResult(getCarNamesInput(), getRacingCountInput());
});
