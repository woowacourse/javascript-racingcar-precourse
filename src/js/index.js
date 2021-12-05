import $ from './utils/dom.js';
import handleCarNameInput from './handlers/handleCarNameInput.js';
import handleRacingCountInput from './handlers/handleRacingCountInput.js';
import { focusCarInput } from './views/focusInput.js';

function RacingCarGame() {
  this.init = () => {
    focusCarInput();
  };

  $('#car-names-submit').addEventListener('click', e => {
    e.preventDefault();
    handleCarNameInput();
  });

  $('#racing-count-submit').addEventListener('click', e => {
    e.preventDefault();
    handleRacingCountInput();
  });
}

const racingCarGame = new RacingCarGame();
racingCarGame.init();
