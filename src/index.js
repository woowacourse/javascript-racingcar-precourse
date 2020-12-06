import RacingCarGame from './racingCarGame.js';

const handlingElems = {
  racingCountContainer: document.querySelector('#racing-count-container'),
  racingCountInput: document.querySelector('#racing-count-input'),
  carGameResultContainer: document.querySelector('#car-game-result-container'),
  carNamesSubmitBtn: document.querySelector('#car-names-submit'),
  racingCountSubmitbtn: document.querySelector('#racing-count-submit'),
  racingNamesInput: document.querySelector('#car-names-input'),
};

const racingCarGame = new RacingCarGame();
racingCarGame.setHandlingElements(handlingElems);
