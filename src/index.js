import { $ } from './dom/dom.js';
import hideRacingCountAndResultElements from './modules/hideRacingCountAndResultElements.js';
import getUserCarNamesInput from './modules/getUserCarNamesInput.js';
import showRacingCountInput from './modules/showRacingCountInput.js';
import getUserRacingCountInput from './modules/getUserRacingCountInput.js';
import showRacingResultTitleElement from './modules/showRacingResultTitleElement.js';
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
    hideRacingCountAndResultElements();
  };

  const handleCarNamesEvent = () => {
    this.racingInfoObject.carNames = getUserCarNamesInput();
    //유저가 입력한 자동차이름이 유효한 경우에만 다음 단계의 이벤트가 실행된다
    if (this.racingInfoObject.carNames !== false) {
      showRacingCountInput();
      addRacingCountEventListener();
    }
    return;
  };

  const handleRacingCountEvent = () => {
    this.racingInfoObject.gameCount = getUserRacingCountInput();
    //유저가 입력한 racing 횟수가 유효한 경우에만 다음 단계의 이벤트가 실행된다
    if (this.racingInfoObject.gameCount !== false) {
      this.racingInfoObject.carInstanceList = createCarInstance(
        this.racingInfoObject.carNames
      );
      showRacingResultTitleElement();
      playRacingCarGame(this.racingInfoObject);
    }
  };

  const addRacingCountEventListener = () => {
    $('#racing-count-form').addEventListener('submit', (e) => {
      e.preventDefalut();
    });
    $('#racing-count-submit').addEventListener('click', handleRacingCountEvent);
  };

  const initEventListener = () => {
    $('#car-names-form').addEventListener('submit', (e) => {
      e.preventDefalut();
    });
    $('#car-names-submit').addEventListener('click', handleCarNamesEvent);
  };
}

const game = new RacingcarGame();
game.init();
