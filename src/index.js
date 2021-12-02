import { $ } from './dom/dom.js';
import hideRacingCountShow from './modules/hideRacingCountShow.js';

export default function RacingcarGame() {
  this.init = () => {
    initEventListener();
    hideRacingCountShow();
  };

  const initEventListener = () => {
    $('#car-names-form').addEventListener('submit', (e) => {
      e.preventDefalut();
    });
  };
}

const game = new RacingcarGame();
game.init();
