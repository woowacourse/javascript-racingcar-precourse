import RacingCarGame from './index.js';

const timesWrapper = document.body.querySelector('#racing-count-container');
const resultWrapper = document.body.querySelector('#result-container');
const carNameInput = document.body.querySelector('#car-names-input');
const carNameSubmitBtn = document.body.querySelector('#car-names-submit');
const timesInput = document.body.querySelector('#racing-count-input');
const timesSubmitBtn = document.body.querySelector('#racing-count-submit');
const racingGame = new RacingCarGame();

const onSubmitCarName = () => {
  if (!isRightInput()) {
    return (carNameInput.value = '');
  }
  racingGame.getPlayingCarList(carNameInput.value);
  timesWrapper.style.display = 'block';
  carNameSubmitBtn.removeEventListener('click', onSubmitCarName);

  return timesSubmitBtn.addEventListener('click', onSubmitRacingTimes);
};

const isRightInput = () => {};

const onSubmitRacingTimes = () => {};

carNameSubmitBtn.addEventListener('click', onSubmitCarName);
