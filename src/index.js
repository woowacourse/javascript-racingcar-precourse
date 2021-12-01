import {
  $racingCountTitle,
  $racingCountInput,
  $racingCountSubmit,
  $resultTitle,
  $carNamesInput,
  $carNamesSubmit,
} from './constants/HTMLconstant.js';

class Game {
  constructor() {
    this.cars = [];
    this.winner = '';
  }

  initialize() {
    $racingCountTitle.style.display = 'none';
    $racingCountInput.style.display = 'none';
    $racingCountSubmit.style.display = 'none';
    $resultTitle.style.display = 'none';
    this.getCarNames();
  }

  getCarNames() {
    $carNamesSubmit.addEventListener('click', e => {
      e.preventDefault();
      const carNames = $carNamesInput.value.split(',');
    });
  }
}

const racingGame = new Game();
racingGame.initialize();
