import RacingCarGame from './index.js';
import checkInputValid from './inputvalid.js';

const timesWrapper = document.body.querySelector('#racing-count-container');
const resultWrapper = document.body.querySelector('#result-container');
const carNameInput = document.body.querySelector('#car-names-input');
const carNameSubmitBtn = document.body.querySelector('#car-names-submit');
const timesInput = document.body.querySelector('#racing-count-input');
const timesSubmitBtn = document.body.querySelector('#racing-count-submit');
const racingGame = new RacingCarGame();

const onSubmitCarName = (e) => {
  if (!checkInputValid(e.target, carNameInput.value)) {
    return (carNameInput.value = '');
  }
  console.log(racingGame);
  racingGame.getPlayingCarList(carNameInput.value);
  timesWrapper.style.display = 'block';
  carNameSubmitBtn.removeEventListener('click', onSubmitCarName);

  return timesSubmitBtn.addEventListener('click', onSubmitRacingTimes);
};

const onSubmitRacingTimes = (e) => {
  if (!checkInputValid(e.target, timesInput.value)) {
    return (timesInput.value = '');
  }
  racingGame.gamePlay(timesInput.value);
  resultWrapper.style.display = 'block';
  timesSubmitBtn.removeEventListener('click', onSubmitRacingTimes);
};

carNameSubmitBtn.addEventListener('click', onSubmitCarName);
