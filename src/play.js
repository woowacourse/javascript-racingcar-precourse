import RacingCarGame from './index.js';
import checkInputValid from './inputvalid.js';
import {carElements} from './utils.js';

const racingGame = new RacingCarGame();
const {
  timesWrapper,
  resultWrapper,
  carNameSubmitBtn,
  timesSubmitBtn,
  carNameInput,
  timesInput,
} = carElements;

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
