import $ from './utils/common/selector.js';
import { submitCarName } from './utils/input/submitCarName.js';
import { submitCountOfRacing } from './utils/input/submitNumberOfExecution.js';

function racingGame() {
  this.init = () => {
    this.initEventListeners();
  };
  this.initEventListeners = () => {
    $('#car-names-submit').addEventListener('click', e => {
      submitCarName(e);
    });

    $('#racing-count-submit').addEventListener('click', e => {
      submitCountOfRacing(e);
    });
  };
}

const car = new racingGame();
car.init();
