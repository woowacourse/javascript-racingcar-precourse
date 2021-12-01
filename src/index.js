import { $ } from './utils.js';
import { default as UI } from './DOMUtils.js';

export default function RacingCarGame() {
  const init = () => {
    activateEventListeners();
    UI.hideSection();
  };

  const handleCarNamesSubmit = e => {
    e.preventDefault();
    const carNames = $('#car-names-input').value;
    console.log(carNames);
  };

  const activateEventListeners = () => {
    $('#car-names-submit').onclick = handleCarNamesSubmit;
  };

  init();
}

new RacingCarGame();
