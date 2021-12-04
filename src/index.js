import $ from './utils/common/selector.js';
import { submitCarName } from './utils/input/submitCarName.js';
import { submitCountOfRacing } from './utils/input/submitCountOfRacing.js';
import { playAll } from './utils/play/playAll.js';

export default function Car(name) {
  this.name = name;
  this.distance = 0;
}

function racingGame() {
  this.cars = [];
  this.count = 0;

  this.init = () => {
    $('#racing-count-form').style.display = 'none';
    this.initEventListeners();
  };

  this.initEventListeners = () => {
    $('#car-names-submit').addEventListener('click', e => {
      const carNames = submitCarName(e, this.cars);
      if (carNames) $('#racing-count-form').style.display = 'block';
    });

    $('#racing-count-submit').addEventListener('click', e => {
      this.count = submitCountOfRacing(e);
      if (this.count) playAll(this.cars, this.count);
    });
  };
}

const car = new racingGame();
car.init();
