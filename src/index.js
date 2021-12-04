import { $, isEmpty, setErrorMessage } from './common/utils.js';
import { inputValidation, isPositiveInteger } from './common/validations.js';
import RacingGame from './components/RacingGame.js';
import { EMPTY } from './constants/index.js';

const $carNamesInput = $('#car-names-input');
const $carNamesSubmit = $('#car-names-submit');
const $racingCountInput = $('#racing-count-input');
const $racingCountSubmit = $('#racing-count-submit');
const $racingResult = $('#racing-result');

const racingGame = new RacingGame($racingResult);

const carNamesValidCheck = event => {
  event.preventDefault();

  const names = inputValidation($carNamesInput.value);

  if (isEmpty(names)) return $carNamesInput.focus();

  racingGame.initialCars(names);

  $racingCountInput.value = EMPTY;
};

const racingCountValidCheck = ({ target }) => {
  if (isEmpty(target.value)) return;

  $racingCountInput.value = isPositiveInteger(target.value) || EMPTY;

  if (isEmpty($racingCountInput.value)) $racingCountInput.focus();
};

const racingGameStart = event => {
  event.preventDefault();

  if (racingGame.isNotRegisteredCars()) {
    $carNamesInput.focus();
    $racingCountInput.value = EMPTY;
    return setErrorMessage('notDefinedCars');
  }

  racingGame.gameStart($racingCountInput.value);
};

$carNamesSubmit.addEventListener('click', carNamesValidCheck);

$racingCountInput.addEventListener('focusout', racingCountValidCheck);

$racingCountSubmit.addEventListener('click', racingGameStart);
