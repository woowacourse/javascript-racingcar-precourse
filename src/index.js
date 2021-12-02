import { $, isEquals, isNotEquals, isNull } from './common/utils.js';
import { inputValidation, isPositiveInteger } from './common/validations.js';
import RacingGame from './components/RacingGame.js';
import { EMPTY } from './constants/index.js';

const $carNamesSubmit = $('#car-names-submit');
const $racingCountInput = $('#racing-count-input');
const $racingCountSubmit = $('#racing-count-submit');

$carNamesSubmit.addEventListener('click', event => {
  event.preventDefault();

  $racingCountInput.value = EMPTY;

  const $carNamesInput = $('#car-names-input');
  const names = inputValidation($carNamesInput.value);
  if (isNull(names)) return $carNamesInput.focus();
  RacingGame.initialCars(names);
});

$racingCountInput.addEventListener('focusout', ({ target }) => {
  const checkedValue = isPositiveInteger(target.value) || EMPTY;
  $racingCountInput.value = checkedValue;
  if (isEquals(checkedValue, EMPTY)) $racingCountInput.focus();
});

$racingCountSubmit.addEventListener('click', event => {
  event.preventDefault();

  // 동일한 내용이지만 입력과 제출 시 각각 검증합니다.
  const checkedValue = isPositiveInteger(event.target.value) || EMPTY;
  if (isNotEquals(checkedValue, EMPTY)) return RacingGame.gameStart();

  $racingCountInput.value = checkedValue;
  return $racingCountInput.focus();
});
