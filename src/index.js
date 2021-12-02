import {
  $,
  isBlank,
  isIncludeSpace,
  isDuplicated,
  splitUsingComma,
  isOverFiveLetters,
} from './utils.js';
import { default as UI } from './DOMUtils.js';
import { ERROR } from './constants.js';
import Car from './Car.js';

export default function RacingCarGame() {
  const init = () => {
    activateEventListeners();
    UI.hideSection();
  };

  const isValidCarNames = string => {
    if (isBlank(string)) return alert(ERROR.BLANK_SUBMIT);
    if (isIncludeSpace(string)) return alert(ERROR.INCLUDE_SPACE);

    const carNamesArray = splitUsingComma(string);
    if (isDuplicated(carNamesArray)) return alert(ERROR.DUPLICATED);
    if (isOverFiveLetters(carNamesArray)) return alert(ERROR.OVER_FIVE_LETTERS);

    return true;
  };

  const handleCarNamesSubmit = e => {
    e.preventDefault();

    const carNames = $('#car-names-input').value;
    if (!isValidCarNames(carNames)) return;

    console.log('검증을 완료하셨습니다.');
    // 2. 검증이 완료되면 자동차를 생성한다.

    let car = new Car(carNames);
    console.log(car._location);
    car.tryMove();
    console.log(car._location);
  };

  const activateEventListeners = () => {
    $('#car-names-submit').onclick = handleCarNamesSubmit;
  };

  init();
}

new RacingCarGame();
