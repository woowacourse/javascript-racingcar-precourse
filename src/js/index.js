import $ from './utils/dom.js';
import handleCarNameInput from './handlers/handleCarNameInput.js';
import handleRacingCountInput from './handlers/handleRacingCountInput.js';

function RacingCarGame() {
  $('#car-names-submit').addEventListener('click', e => {
    e.preventDefault();
    handleCarNameInput();
  });
  $('#racing-count-submit').addEventListener('click', e => {
    e.preventDefault();
    handleRacingCountInput();
  });
  $('#car-names-input').focus();
}

new RacingCarGame();
