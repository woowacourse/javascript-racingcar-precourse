/* eslint-disable no-new */
import {$carNameSubmit, $racingCountSubmit} from './constants/constants.js';
import {parseCarName, createCars} from './utils/submitCarNames.js';
import {initDOM, showNextDOM} from './utils/showDOM.js';
import {checkInput} from './utils/submitCountTrun.js';
import {warning} from './utils/validCarName.js';
import PlayGame from './modules/playGame.js';

class RacingCarGame {
  constructor() {
    initDOM();
    this.initEventListener();
  }

  initEventListener() {
    $carNameSubmit.addEventListener('click', e => {
      e.preventDefault();
      if (warning(parseCarName())) {
        showNextDOM();
      }
    });

    $racingCountSubmit.addEventListener('click', e => {
      e.preventDefault();
      const cars = createCars();
      new PlayGame(cars, checkInput());
    });
  }
}

new RacingCarGame();
