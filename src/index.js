import { $ } from './dom/dom.js';
import getUserCarNamesInput from './modules/getUserCarNamesInput.js';
import hideRacingCountShow from './modules/hideRacingCountShow.js';
import showRacingCountInput from './modules/showRacingCountInput.js';

export default function RacingcarGame() {
  this.racingInfoObject = {
    carNames: [],
    gameCount: 0,
  };
  this.init = () => {
    initEventListener();
    hideRacingCountShow();
  };

  const playGame = () => {
    this.racingInfoObject.carNames = getUserCarNamesInput();
    if (this.racingInfoObject.carNames !== false) {
      showRacingCountInput();
    }
    return;
  };

  const initEventListener = () => {
    $('#car-names-form').addEventListener('submit', (e) => {
      e.preventDefalut();
    });
    $('#car-names-submit').addEventListener('click', playGame);
  };
}

const game = new RacingcarGame();
game.init();
