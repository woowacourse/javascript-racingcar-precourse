import Input from './Input.js';
import playGame from '../game/playGame.js';
import {
  CAR_NAMES_ERROR,
  REPEAT_COUNT_ERROR,
  EMPTY_INPUT_ERROR,
} from '../view/View.js';

const CAR_NAME_INPUT_ID = '#car-names-input';
const RACING_COUNT_INPUT_ID = '#racing-count-input';
const CAR_NAME_SUBMIT_ID = '#car-names-submit';
const RACING_COUNT_SUBMIT_ID = '#racing-count-submit';

function onCarNamesSubmit(event, userInput, view) {
  event.preventDefault();
  const $carNamesInput = document.querySelector(CAR_NAME_INPUT_ID);

  userInput.setCarNames($carNamesInput.value.split(','));
  if (!userInput.getCarNames()) {
    view.alertError(CAR_NAMES_ERROR);
    return;
  }
  view.showNextInput();
}

function isEmptyInput(userInput) {
  return !userInput.getCarNames() || userInput.getRepeatCount() === 0;
}

function onRepeatCountSubmit(event, userInput, view) {
  event.preventDefault();
  userInput.setRepeatCount(document.querySelector(RACING_COUNT_INPUT_ID).value);
  if (userInput.getRepeatCount() === 0) {
    view.alertError(REPEAT_COUNT_ERROR);
    return;
  }
  if (isEmptyInput(userInput)) {
    view.alertError(EMPTY_INPUT_ERROR);
    return;
  }
  playGame(userInput, view);
}

export default function inputEventHandler(view) {
  const $carNamesButton = document.querySelector(CAR_NAME_SUBMIT_ID);
  const $repeatCountButton = document.querySelector(RACING_COUNT_SUBMIT_ID);
  const userInput = new Input();

  $carNamesButton.addEventListener('click', (event) => {
    onCarNamesSubmit(event, userInput, view);
  });
  $repeatCountButton.addEventListener('click', (event) => {
    onRepeatCountSubmit(event, userInput, view);
  });
}
