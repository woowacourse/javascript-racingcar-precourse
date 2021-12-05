import $ from './utils/dom.js';
import handleCarNameInput from './handlers/handleCarNameInput.js';
import handleRacingCountInput from './handlers/handleRacingCountInput.js';

function RacingCarGame() {
  this.init = () => {
    $('#car-names-input').focus();
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
