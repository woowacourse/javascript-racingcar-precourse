import { $ } from './util/dom.js';
import { MIN_RACING_COUNT, NUM } from './constant/constant.js';
import { startRacingGame } from './playGame.js';

export const getRacingCountInput = e => {
  e.preventDefault();
  const racingCountInput = $('#racing-count-input').value;
  if (checkRacingCountInput(racingCountInput)) {
    window.alert('잘못된 값을 입력하셨습니다.');
  } else {
    startRacingGame();
  }
};

export const checkRacingCountInput = racingCountInput => {
  return (
    !checkRacingCountBlank(racingCountInput) ||
    !checkRacingCountNotNum(racingCountInput) ||
    !checkRacingCountSmallThanOne(racingCountInput)
  );
};

const checkRacingCountBlank = racingCountInput => {
  return racingCountInput !== '';
};

const checkRacingCountNotNum = racingCountInput => {
  const racingCountToArray = racingCountInput.split('');

  let checkNum = racingCountToArray.filter(x => NUM.includes(parseInt(x, 10)));
  return checkNum.length === racingCountInput.length;
};

const checkRacingCountSmallThanOne = racingCountInput => {
  return parseInt(racingCountInput) >= MIN_RACING_COUNT;
};
