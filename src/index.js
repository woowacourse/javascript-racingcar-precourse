import $ from './utils/common/selector.js';
import { submitCarName } from './utils/input/submitCarName.js';
import { submitCountOfRacing } from './utils/input/submitCountOfRacing.js';
import { play } from './utils/play/play.js';

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

    $('#game-play-submit').addEventListener('click', play);
  };
}

const car = new racingGame();
car.init();
