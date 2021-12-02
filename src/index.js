import { $, isEquals, isNull } from './common/utils.js';
import { inputValidation, isPositiveInteger } from './common/validations.js';
import initialCarNames from './components/index.js';
import { EMPTY } from './constants/index.js';

const $carNamesSubmit = $('#car-names-submit');
const $racingCountInput = $('#racing-count-input');

$carNamesSubmit.addEventListener('click', event => {
  event.preventDefault();

  $racingCountInput.value = EMPTY;

  const $carNamesInput = $('#car-names-input');
  const names = inputValidation($carNamesInput.value);
  if (isNull(names)) return $carNamesInput.focus();
  initialCarNames(names);
});

$racingCountInput.addEventListener('focusout', ({ target }) => {
  const checkedValue = isPositiveInteger(target.value) || EMPTY;
  $racingCountInput.value = checkedValue;
  if (isEquals(checkedValue, EMPTY)) $racingCountInput.focus();
});
