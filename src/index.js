import initGame from './modules/init.js';
import {onSubmitCarName, onSubmitRacingTimes} from './modules/onSubmit.js';
import {$carNameSubmitBtn, $timesSubmitBtn} from './modules/utils.js';

export const gameStart = () => {
  initGame();
  $carNameSubmitBtn.addEventListener('click', onSubmitCarName);
  $timesSubmitBtn.addEventListener('click', onSubmitRacingTimes);
};

gameStart();
