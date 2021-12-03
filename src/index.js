import {
  $,
  isBlank,
  isIncludeSpace,
  isDuplicated,
  splitUsingComma,
  isOverFiveLetters,
  generateCars,
  isNumber,
  isZero,
} from './utils.js';
import { default as UI } from './DOMUtils.js';
import { ERROR } from './constants.js';

export default function RacingCarGame() {
  let cars = [];
  let tryCount = 0;

  const init = () => {
    activateEventListeners();
    UI.initSection();
  };

  const activateEventListeners = () => {
    $('#car-names-submit').onclick = handleCarNamesSubmit;
    $('#racing-count-input').onkeydown = handleRacingCountInput;
    $('#racing-count-submit').onclick = handleRacingCountSubmit;
  };

  const handleCarNamesSubmit = e => {
    e.preventDefault();

    const carNames = $('#car-names-input').value;
    if (!isValidCarNames(carNames)) return;
    cars = generateCars(carNames);

    UI.disableCarNamesForm();
    UI.showRacingCountSection();
  };

  const isValidCarNames = string => {
    if (isBlank(string)) return alert(ERROR.BLANK_SUBMIT);
    if (isIncludeSpace(string)) return alert(ERROR.INCLUDE_SPACE);

    const carNamesArray = splitUsingComma(string);
    if (isDuplicated(carNamesArray)) return alert(ERROR.DUPLICATED);
    if (isOverFiveLetters(carNamesArray)) return alert(ERROR.OVER_FIVE_LETTERS);

    return true;
  };

  const handleRacingCountInput = e => {
    if (isNumber(e.key)) return alert(ERROR.NOT_NUMBER);
  };

  const handleRacingCountSubmit = e => {
    e.preventDefault();

    const racingCount = $('#racing-count-input').value;
    if (isBlank(racingCount)) return alert(ERROR.BLANK_SUBMIT);
    if (isZero(racingCount)) return alert(ERROR.NOT_POSIVITE_INT);
    playCarRacing(Number(racingCount));

    UI.disableRacingCountForm();
  };

  const playCarRacing = racingCount => {
    Array.from({ length: racingCount }, () => {
      cars.forEach(car => {
        car.tryMove();
        console.log(`${car._name}: ${car._location}`);
      });
      console.log('');
    });
  };

  init();
}

new RacingCarGame();
