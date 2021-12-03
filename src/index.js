import { $, isEquals, isNotEquals, setErrorMessage } from './common/utils.js';
import { inputValidation, isPositiveInteger } from './common/validations.js';
import RacingGame from './components/RacingGame.js';
import { EMPTY, NUMBER } from './constants/index.js';

const $carNamesSubmit = $('#car-names-submit');
const $racingCountInput = $('#racing-count-input');
const $racingCountSubmit = $('#racing-count-submit');
const $racingResult = $('#racing-result');

const racingGame = new RacingGame($racingResult);

$carNamesSubmit.addEventListener('click', event => {
  event.preventDefault();

  $racingCountInput.value = EMPTY;

  const $carNamesInput = $('#car-names-input');
  const names = inputValidation($carNamesInput.value);

  if (isEquals(names, EMPTY)) return $carNamesInput.focus();

  racingGame.initialCars(names);
});

$racingCountInput.addEventListener('focusout', ({ target }) => {
  if (isEquals(target.value, EMPTY)) return;

  const checkedValue = isPositiveInteger(target.value) || EMPTY;

  $racingCountInput.value = checkedValue;

  if (isEquals(checkedValue, EMPTY)) $racingCountInput.focus();
});

$racingCountSubmit.addEventListener('click', event => {
  event.preventDefault();

  const $carNamesInput = $('#car-names-input');
  const { value: countNumber } = $('#racing-count-input');

  if (racingGame.isNotRegisteredCars()) {
    $carNamesInput.focus();
    $racingCountInput.value = EMPTY;
    return setErrorMessage('notDefinedCars');
  }

  // 동일한 내용이지만 입력과 제출 시 각각 검증합니다.
  const checkedValue = isPositiveInteger(countNumber) || EMPTY;
  const racingGameParams = {
    count: checkedValue,
    start: NUMBER.START,
    end: NUMBER.END,
  };

  if (isNotEquals(checkedValue, EMPTY)) racingGame.gameStart(racingGameParams);
});
