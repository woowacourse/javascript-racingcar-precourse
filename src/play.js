import RacingCarGame from './index.js';
import {NameValid, TimesValid} from './inputvalid.js';

const timesWrapper = document.body.querySelector('#racing-count-container');
const resultWrapper = document.body.querySelector('#result-container');
const carNameInput = document.body.querySelector('#car-names-input');
const carNameSubmitBtn = document.body.querySelector('#car-names-submit');
const timesInput = document.body.querySelector('#racing-count-input');
const timesSubmitBtn = document.body.querySelector('#racing-count-submit');
const racingGame = new RacingCarGame();

const onSubmitCarName = () => {
  if (!isRightNameInput(carNameInput.value)) {
    return (carNameInput.value = '');
  }
  console.log(racingGame);
  racingGame.getPlayingCarList(carNameInput.value);
  timesWrapper.style.display = 'block';
  carNameSubmitBtn.removeEventListener('click', onSubmitCarName);

  return timesSubmitBtn.addEventListener('click', onSubmitRacingTimes);
};

const isRightNameInput = (name) => {
  const nameValid = new NameValid(name.split(','));
  if (!nameValid.isRightCharacter()) {
    return false;
  }
  if (!nameValid.isRightLength()) {
    return false;
  }
  if (!nameValid.isAllDifferentValue()) {
    return false;
  }

  return true;
};

const onSubmitRacingTimes = () => {
  if (!isRightRacingTimesInput(timesInput.value)) {
    return (timesInput.value = '');
  }
};

const isRightRacingTimesInput = (times) => {
  const timesValid = new TimesValid(times);
  if (!timesValid.isMoreThanZero()) {
    return false;
  }
  if (!timesValid.isfilledValue()) {
    return false;
  }
  if (!timesValid.isRightNumber()) {
    return false;
  }

  return true;
};

carNameSubmitBtn.addEventListener('click', onSubmitCarName);
