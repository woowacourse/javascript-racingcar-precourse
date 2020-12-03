import initGame from './init.js';
import {onSubmitCarName, onSubmitRacingTimes} from './onSubmit.js';
import {$carNameSubmitBtn, $timesSubmitBtn} from './utils.js';
import {createRestartBtn} from '../elements/createElement.js';
import {removeResultText} from '../elements/removeElement.js';

export const gameStart = () => {
  initGame();
  $carNameSubmitBtn.addEventListener('click', onSubmitCarName);
  $timesSubmitBtn.addEventListener('click', onSubmitRacingTimes);
};

export const gameRestart = () => {
  const $restartBtn = createRestartBtn();
  $restartBtn.addEventListener('click', () => {
    removeResultText();
    gameStart();
  });
};
