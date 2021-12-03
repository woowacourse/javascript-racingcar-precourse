import { $ } from './dom/dom.js';
import getUserCarNamesInput from './modules/getUserCarNamesInput.js';
import hideRacingCountShow from './modules/hideRacingCountShow.js';
import showRacingCountInput from './modules/showRacingCountInput.js';
import getUserRacingCountInput from './modules/getUserRacingCountInput.js';
import showRacingResultTitle from './modules/showRacingResultTitle.js';
import createCarInstance from './car/createCarInstance.js';
import playRacingCarGame from './modules/playRacingCarGame.js';

export default function RacingcarGame() {
  this.racingInfoObject = {
    carNames: [],
    gameCount: 0,
    carInstanceList: [],
  };

  this.init = () => {
    initEventListener();
    hideRacingCountShow();
  };

  const gameStart = () => {
    this.racingInfoObject.carNames = getUserCarNamesInput();
    if (this.racingInfoObject.carNames !== false) {
      showRacingCountInput();
      addRacingCountEventListener();
    }
    return;
  };

  const gameContinue = () => {
    this.racingInfoObject.gameCount = getUserRacingCountInput();
    if (this.racingInfoObject.gameCount !== false) {
      this.racingInfoObject.carInstanceList = createCarInstance(
        this.racingInfoObject.carNames
      );
      showRacingResultTitle();
      playRacingCarGame(this.racingInfoObject);
    }
  };

  const addRacingCountEventListener = () => {
    $('#racing-count-form').addEventListener('submit', (e) => {
      e.preventDefalut();
    });
    $('#racing-count-submit').addEventListener('click', gameContinue);
  };

  const initEventListener = () => {
    $('#car-names-form').addEventListener('submit', (e) => {
      e.preventDefalut();
    });
    $('#car-names-submit').addEventListener('click', gameStart);
  };
}

const game = new RacingcarGame();
game.init();
