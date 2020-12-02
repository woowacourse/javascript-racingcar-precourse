import RacingCarGame from './index.js';
import InputValid from './inputvalid.js';

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
  racingGame.getPlayingCarList(carNameInput.value);
  timesWrapper.style.display = 'block';
  carNameSubmitBtn.removeEventListener('click', onSubmitCarName);

  return timesSubmitBtn.addEventListener('click', onSubmitRacingTimes);
};

const isRightNameInput = (name) => {
  const inputValid = new InputValid();
  const splitedName = name.split(',');
  if (!inputValid.isRightCharacter(splitedName)) {
    return false;
  }
  if (!inputValid.isRightLength(splitedName)) {
    return false;
  }
  if (inputValid.isEqualValue(splitedName)) {
    return false;
  }
};

const onSubmitRacingTimes = () => {};

carNameSubmitBtn.addEventListener('click', onSubmitCarName);
