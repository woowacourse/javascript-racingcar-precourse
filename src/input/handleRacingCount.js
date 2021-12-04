import { GAME, ERR_MESSAGE } from '../utils/constant.js';
import startRacingGame from '../game/startRacingGame.js';

function isValidRacingCount(racingCount) {
  if (racingCount < GAME.MIN_INPUT_COUNT) {
    return alert(ERR_MESSAGE.COUNT_TOO_SMALL);
  }
  return true;
}

export default function handleRacingCountSubmit(event) {
  event.preventDefault();
  const $racingCountInput = document.querySelector('#racing-count-input');
  const racingCount = $racingCountInput.value;

  if (!isValidRacingCount(racingCount)) {
    return;
  }

  startRacingGame(racingCount);
}
