import initView from './view/initView.js';
import inputEventHandler from './input/inputEventHandler.js';

function raceCarGame() {
  const view = initView();
  inputEventHandler(view);
}

raceCarGame();
