import initGame from './init.js';
import {onSubmitCarName, onSubmitRacingCount} from './onSubmit.js';
import {$carNameSubmitBtn, $countSubmitBtn} from './utils.js';
import {createRestartBtn} from '../elements/createElement.js';
import {removeResultText} from '../elements/removeElement.js';

export const gameStart = () => {
  initGame();
  $carNameSubmitBtn.addEventListener('click', onSubmitCarName);
  $countSubmitBtn.addEventListener('click', onSubmitRacingCount);
};

export const gameRestart = () => {
  const $restartBtn = createRestartBtn();
  $restartBtn.addEventListener('click', () => {
    removeResultText();
    gameStart();
  });
};
