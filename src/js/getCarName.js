import { $ } from './util/dom.js';
// prettier-ignore
import { MAX_CAR_NAMES_NUM, MIN_CAR_NAMES_NUM, MIN_CARS_NUM } from './constant/constant.js';

export const getCarNameInput = e => {
  e.preventDefault();
  const carNamesInput = $('#car-names-input').value.split(',');
  if (
    !checkCarNum(carNamesInput) ||
    !checkCarNameLength(carNamesInput) ||
    !checkOverlapCarName(carNamesInput)
  ) {
    window.alert('잘못된 값을 입력하셨습니다.');
  } else {
    $('#racing-count-title').style.display = '';
    $('#racing-count-form').style.display = '';
  }
};

const checkCarNum = carNamesInput => {
  return carNamesInput.length >= MIN_CARS_NUM;
};

const checkCarNameLength = carNamesInput => {
  let wrongCarNames = carNamesInput.filter(
    x => x.length < MIN_CAR_NAMES_NUM || x.length > MAX_CAR_NAMES_NUM,
  );
  return wrongCarNames.length === 0;
};

const checkOverlapCarName = carNamesInput => {
  const isOverlap = carNamesInput.some(function (x) {
    return !(carNamesInput.indexOf(x) !== carNamesInput.lastIndexOf(x));
  });
  return isOverlap;
};
