import playGame from '../game/playGame.js';
import printResult from '../game/printResult.js';

function checkValidRacingCount(racingCount) {
  if (Math.sign(racingCount) === 1) {
    return true;
  }
  return false;
}

export default function getRacingCount(carList) {
  const $racingCountInput = document.querySelector('#racing-count-input');
  const racingCount = $racingCountInput.value;

  if (checkValidRacingCount(racingCount)) {
    return printResult(carList, Number(racingCount));
  }
  return alert('잘못 된 입력입니다! 0이상의 숫자만 입력 가능합니다');
}
