import $ from './utils/common/selector.js';
import { submitCarName } from './utils/input/submitCarName.js';

function racingGame() {
  this.init = () => {
    this.initEventListeners();
  };
  this.initEventListeners = () => {
    $('#car-names-submit').addEventListener('click', e => {
      submitCarName(e);
    });
  };
}

const car = new racingGame();
car.init();
