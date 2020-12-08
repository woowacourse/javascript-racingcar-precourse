import eventHandlers from './utils/eventHandlers.js';
import elements from './store/elements.js';

(() => {
  elements.carNamesInputElement.addEventListener(
    'input',
    eventHandlers.markCarNameNotSubmitted
  );
  elements.carNamesSubmitButtonElement.addEventListener(
    'click',
    eventHandlers.registerCarNames
  );
  elements.racingCountSubmitElement.addEventListener(
    'click',
    eventHandlers.startRaceGame
  );
})();
