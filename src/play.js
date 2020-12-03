import RacingCarGame from './class/RacingCarGame.js';
import checkInputValid from './modules/inputvalid.js';
import {carElements} from './modules/utils.js';
import initGame from './modules/init.js';
import {showCounterElement, showResultElement} from './elements/showElement.js';

const racingGame = new RacingCarGame();
const {
  carNameSubmitBtn,
  timesSubmitBtn,
  carNameInput,
  timesInput,
} = carElements;

const gameStart = () => {
  initGame();
};

gameStart();

const onSubmitCarName = (e) => {
  if (!checkInputValid(e.target, carNameInput.value)) {
    return (carNameInput.value = '');
  }
  console.log(racingGame);
  racingGame.getPlayingCarList(carNameInput.value);
  showCounterElement();
  carNameSubmitBtn.removeEventListener('click', onSubmitCarName);

  return timesSubmitBtn.addEventListener('click', onSubmitRacingTimes);
};

const onSubmitRacingTimes = (e) => {
  if (!checkInputValid(e.target, timesInput.value)) {
    return (timesInput.value = '');
  }
  racingGame.gamePlay(timesInput.value);
  showResultElement();
  timesSubmitBtn.removeEventListener('click', onSubmitRacingTimes);
};

carNameSubmitBtn.addEventListener('click', onSubmitCarName);
