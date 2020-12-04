import RacingCarGame from './racingCarGame.js';
import ValidationError from './validationError.js';

const racingCarGame = new RacingCarGame();

const getCarNamesToList = function () {
  const carNamesInput = document.querySelector('#car-names-input');
  const regexp = /[^,\s]+[^,]*[^,\s]+/gi; // ,와 양쪽 공백을 제외한 부분만 가져온다
  const carNamesList = carNamesInput.value.match(regexp);

  if (!carNamesList) {
    throw new ValidationError('자동차 이름을 입력해주세요', carNamesInput);
  }
  if (carNamesList.some(arr => arr.length > 5)) {
    throw new ValidationError(
      '자동차 이름은 5자 이하로 입력해주세요',
      carNamesInput,
    );
  }

  return carNamesList;
};

const setElemVisible = function (elem, visible) {
  if (visible) {
    elem.classList.replace('hide', 'visible');
  } else {
    elem.classList.replace('visible', 'hide');
  }
};

const handleCarNamesSubmitBtn = function () {
  try {
    const carNamesList = getCarNamesToList();
    racingCarGame.initCars(carNamesList);
    setElemVisible(document.querySelector('#racing-count-container'), true);
  } catch (e) {
    alert(e.message);
    if (e.errElem) {
      e.errElem.focus();
    }
  }
};

const getRacingCount = function () {
  const racingCountInput = document.querySelector('#racing-count-input');
  const racingCount = Number(racingCountInput.value);
  if (!racingCountInput.value || Number.isNaN(racingCount)) {
    throw new ValidationError('숫자를 입력해주세요', racingCountInput);
  }
  if (!Number.isInteger(racingCount) || racingCount <= 0) {
    throw new ValidationError('자연수를 입력해주세요', racingCountInput);
  }

  return racingCount;
};

const handleCountSubmitBtn = function () {
  try {
    const racingCount = getRacingCount();
    // TODO: 경기 횟수만큼 레이싱하기
    racingCarGame.setRacingCount(racingCount);
  } catch (e) {
    alert(e.message);
    if (e.errElem) {
      e.errElem.focus();
    }
  }
};

const carNamesSubmitBtn = document.querySelector('#car-names-submit');
carNamesSubmitBtn.addEventListener('click', handleCarNamesSubmitBtn);

const racingCountSubmitbtn = document.querySelector('#racing-count-submit');
racingCountSubmitbtn.addEventListener('click', handleCountSubmitBtn);
