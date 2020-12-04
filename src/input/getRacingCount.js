import playGame from '../game/playGame.js';

function checkValidRacingCount(racingCount) {
  if (Math.sign(racingCount) === 1) {
    return true;
  }
  return false;
}

function getRacingCountValue(carList) {
  const $racingCountInput = document.querySelector('#racing-count-input');
  const racingCount = $racingCountInput.value;

  if (checkValidRacingCount(racingCount)) {
    return playGame(carList, Number(racingCount));
  }
  return alert('잘못 된 입력입니다! 0이상의 숫자만 입력 가능합니다');
}

export default function getRacingCount(carList) {
  const $racingCountSubmit = document.querySelector('#racing-count-submit');
  $racingCountSubmit.addEventListener('click', () =>
    getRacingCountValue(carList),
  );
}
