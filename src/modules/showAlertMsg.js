import { $ } from '../dom/dom.js';

export default function showAlertMsg(whatComponent) {
  alert('잘못된 값을 입력하셨습니다 다시 입력해 주세요');
  if (whatComponent === 'carnamesinput') {
    $('#car-names-input').value = '';
  } else if (whatComponent === 'racingcountinput') {
    $('#racing-count-input').value = '';
  }
}
