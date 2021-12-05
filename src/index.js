import Car from './car.js';
import CarRacing from './carRacing.js';
import {
  APP,
  CAR_NAMES_INPUT,
  CAR_NAMES_SUBMIT_BUTTON,
  ERROR_MESSAGE,
  RACING_COUNT,
  RACING_COUNT_INPUT,
  RACING_COUNT_SUBMIT_BUTTON,
  RACING_RESULT,
  STYLE_DISPLAY,
} from './constants.js';
import {
  on,
  qs,
  qsAll,
  setStyleDisplay,
  checkOverFiveLetters,
} from './utils.js';

const { BLOCK, INLINE_BLOCK, NONE } = STYLE_DISPLAY;
const { MORE_THAN_FIVE_LETTERS, NO_MORE_THAN_ZERO } = ERROR_MESSAGE;

const cars = [];

function init() {
  const app = qs(APP);
  const carNamesInput = qs(CAR_NAMES_INPUT);
  const carNamesSubmitButton = qs(CAR_NAMES_SUBMIT_BUTTON);
  const racingCountInput = qs(RACING_COUNT_INPUT);
  const racingCountSubmitButton = qs(RACING_COUNT_SUBMIT_BUTTON);
  const racingCount = qs(RACING_COUNT);
  const racingResult = qs(RACING_RESULT);
  
  setStyleDisplay(racingCount, NONE);
  setStyleDisplay(racingCountInput, NONE);
  setStyleDisplay(racingCountSubmitButton, NONE);
  setStyleDisplay(racingResult, NONE);
}

init();



function showRacingCountForm() {
  setStyleDisplay(racingCount, BLOCK);
  setStyleDisplay(racingCountInput, INLINE_BLOCK);
  setStyleDisplay(racingCountSubmitButton, INLINE_BLOCK);
}

on(carNamesSubmitButton, 'click', (event) => {
  event.preventDefault();

  const carNamesArr = carNamesInput.value.split(',');
  if (!checkOverFiveLetters(carNamesArr)) {
    alert(MORE_THAN_FIVE_LETTERS);
    return;
  }

  carNamesArr.forEach((name) => cars.push(new Car(name)));
  showRacingCountForm();
});

function showRacingResult(resultTemplate) {
  setStyleDisplay(racingResult, BLOCK);
  const racingEachResults = document.createElement('div');
  racingEachResults.innerHTML = resultTemplate;
  app.append(racingEachResults);
}

on(racingCountSubmitButton, 'click', (event) => {
  event.preventDefault();

  if (racingCountInput.value <= 0) {
    alert(NO_MORE_THAN_ZERO);
    return;
  }

  const carRacing = new CarRacing(cars);
  const resultTemplate = carRacing.play(racingCountInput.value);
  showRacingResult(resultTemplate);
});
