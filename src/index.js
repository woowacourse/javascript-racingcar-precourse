import {
  $,
  isBlank,
  isIncludeSpace,
  isDuplicated,
  splitUsingComma,
  isOverFiveLetters,
} from './utils.js';
import { default as UI } from './DOMUtils.js';

export default function RacingCarGame() {
  const init = () => {
    activateEventListeners();
    UI.hideSection();
  };

  const isValidCarNames = string => {
    if (isBlank(string)) return alert('빈칸으로 제출 하실 수 없습니다.');
    if (isIncludeSpace(string)) return alert('공백 입력을 하실 수 없습니다.');

    const carNamesArray = splitUsingComma(string);
    if (isDuplicated(carNamesArray)) return alert('중복 입력을 하실 수 없습니다.');
    if (isOverFiveLetters(carNamesArray)) return alert('이름은 5자 이하만 가능합니다.');

    return true;
  };

  const handleCarNamesSubmit = e => {
    e.preventDefault();

    const carNames = $('#car-names-input').value;
    if (!isValidCarNames(carNames)) return;

    console.log('검증을 완료하셨습니다.');
    // 2. 검증이 완료되면 자동차를 생성한다.
  };

  const activateEventListeners = () => {
    $('#car-names-submit').onclick = handleCarNamesSubmit;
  };

  init();
}

new RacingCarGame();
