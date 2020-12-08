import {
  markCarNameNotSubmitted,
  registerCarNames,
  startRaceGame,
} from './handlers/eventHandlers.js';
import {
  carNamesInputElement,
  carNamesSubmitButtonElement,
  racingCountSubmitElement,
} from './store/elements.js';

(() => {
  carNamesInputElement.addEventListener('input', markCarNameNotSubmitted);
  carNamesSubmitButtonElement.addEventListener('click', registerCarNames);
  racingCountSubmitElement.addEventListener('click', startRaceGame);
})();
