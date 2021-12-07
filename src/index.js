import inputEventHandler from './input/inputEventHandler.js';
import View from './view/View.js';

function raceCarGame() {
  const view = new View();

  view.hideNextHtml();
  inputEventHandler(view);
}

raceCarGame();
