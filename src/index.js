import Car from './car.js';
import CarRacing from './carRacing.js';
import { ERROR_MESSAGE, STYLE_DISPLAY } from './constants.js';
import {
  on,
  qs,
  qsAll,
  setStyleDisplay,
  checkOverFiveLetters,
} from './utils.js';

const { BLOCK, INLINE_BLOCK, NONE } = STYLE_DISPLAY;
const { MORE_THAN_FIVE_LETTERS, NO_MORE_THAN_ZERO } = ERROR_MESSAGE;

const app = qs('#app');
const carNamesInput = qs('#car-names-input');
const carNamesSubmitButton = qs('#car-names-submit');
const racingCountInput = qs('#racing-count-input');
const racingCountSubmitButton = qs('#racing-count-submit');
const [numberOfAttempts, resultMessage] = qsAll('h4');

setStyleDisplay(numberOfAttempts, NONE);
setStyleDisplay(racingCountInput, NONE);
setStyleDisplay(racingCountSubmitButton, NONE);
setStyleDisplay(resultMessage, NONE);

const cars = [];

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

function showRacingCountForm() {
  setStyleDisplay(numberOfAttempts, BLOCK);
  setStyleDisplay(racingCountInput, INLINE_BLOCK);
  setStyleDisplay(racingCountSubmitButton, INLINE_BLOCK);
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

function showRacingResult(resultTemplate) {
  setStyleDisplay(resultMessage, BLOCK);
  const racingResult = document.createElement('div');
  racingResult.innerHTML = resultTemplate;
  app.append(racingResult);
}