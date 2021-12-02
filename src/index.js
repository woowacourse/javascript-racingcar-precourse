import { isNonInput, isValidLength, genCarInstances } from './data/input.js';
import { $, $$ } from './utils/dom.js';

$$('form').forEach((selector) =>
  selector.addEventListener('submit', function (e) {
    e.preventDefault();
  })
);

$('#car-names-submit').addEventListener('click', function (e) {
  if (isNonInput() || !isValidLength()) {
    alert('자동차 이름을 5자 이하로 콤마로 구분하여 입력해주세요.');
    $('#car-names-input').focus();
    return;
  }
  const carNames = genCarInstances();
});
