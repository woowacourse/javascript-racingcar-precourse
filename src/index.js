import Input from './input/Input.js';
import playGame from './game/playGame.js';
import View from './view/View.js';

const CAR_NAME_INPUT_ID = '#car-names-input';
const RACING_COUNT_INPUT_ID = '#racing-count-input';
const CAR_NAME_SUBMIT_ID = '#car-names-submit';
const RACING_COUNT_SUBMIT_ID = '#racing-count-submit';

export const CAR_NAMES_ERROR = 1;
export const REPEAT_COUNT_ERROR = 2;
export const EMPTY_INPUT_ERROR = 3;

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
  playGame(userInput);
}

function gameEventHandler() {
  const $carNamesButton = document.querySelector(CAR_NAME_SUBMIT_ID);
  const $repeatCountButton = document.querySelector(RACING_COUNT_SUBMIT_ID);
  const userInput = new Input();
  const view = new View();
  
  $carNamesButton.addEventListener('click', (event) => {
    onCarNamesSubmit(event, userInput, view);
  });
  $repeatCountButton.addEventListener('click', (event) => {
    onRepeatCountSubmit(event, userInput, view);
  });
}

gameEventHandler();
