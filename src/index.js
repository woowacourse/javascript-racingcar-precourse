import { $, isEquals, isNotEquals, isNull, setErrorMessage } from './common/utils.js';
import { inputValidation, isPositiveInteger } from './common/validations.js';
import RacingGame from './components/RacingGame.js';
import { EMPTY, NUMBER } from './constants/index.js';

const $carNamesSubmit = $('#car-names-submit');
const $racingCountInput = $('#racing-count-input');
const $racingCountSubmit = $('#racing-count-submit');

const racingGame = new RacingGame();

$carNamesSubmit.addEventListener('click', event => {
  event.preventDefault();

  $racingCountInput.value = EMPTY;

  const $carNamesInput = $('#car-names-input');
  const names = inputValidation($carNamesInput.value);

  if (isNull(names)) return $carNamesInput.focus();

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

  const { value: carNames } = $('#car-names-input');
  const { value: countNumber } = $('#racing-count-input');

  if (isEquals(carNames, EMPTY)) return setErrorMessage('');

  // 동일한 내용이지만 입력과 제출 시 각각 검증합니다.
  const checkedValue = isPositiveInteger(countNumber) || EMPTY;
  const racingGameParams = {
    count: checkedValue,
    start: NUMBER.START,
    end: NUMBER.END,
  };

  if (isNotEquals(checkedValue, EMPTY)) racingGame.gameStart(racingGameParams);
});
