import { isNonCarNames, isValidLength, genCarInstances } from './data/carNameInput.js';
import { isNonRacingCount, isNumber, isNegative } from './data/racingCountInput.js';
import { $, $$ } from './utils/dom.js';

$$('form').forEach((selector) =>
  selector.addEventListener('submit', function (e) {
    e.preventDefault();
  })
);

$('#car-names-submit').addEventListener('click', function (e) {
  if (isNonCarNames() || !isValidLength()) {
    alert('자동차 이름을 5자 이하로 콤마로 구분하여 입력해주세요.');
    $('#car-names-input').focus();
    return;
  }
  const carNames = genCarInstances();
});

$('#racing-count-submit').addEventListener('click', function (e) {
  if (isNonRacingCount() || !isNumber() || isNegative()) {
    alert('1 이상의 정수를 입력해주세요.');
    $('#racing-count-submit').focus();
    return;
  }
  const attemptCounts = $('#racing-count-input').value;
});
