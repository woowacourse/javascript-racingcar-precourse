import { $ } from './util/dom.js';
import { MIN_RACING_COUNT } from './constant/constant.js';

export const getRacingCountInput = e => {
  e.preventDefault();
  const racingCountInput = $('#racing-count-input').value;
  if (
    !checkRacingCountBlank(racingCountInput) ||
    !checkRacingCountNotNum(racingCountInput) ||
    !checkRacingCountSmallThanOne(racingCountInput)
  ) {
    window.alert('잘못된 값을 입력하셨습니다.');
  } else {
    $('#result-title').style.display = '';
  }
};

const checkRacingCountBlank = racingCountInput => {
  return racingCountInput !== '';
};

const checkRacingCountNotNum = racingCountInput => {
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const racingCountToArray = racingCountInput.split('');
  let isNum = racingCountToArray.filter(x => num.includes(parseInt(x, 10)));
  return isNum.length === racingCountInput.length;
};

const checkRacingCountSmallThanOne = racingCountInput => {
  return parseInt(racingCountInput) >= MIN_RACING_COUNT;
};
