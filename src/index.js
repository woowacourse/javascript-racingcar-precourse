import GamePlay from './GamePlay.js';
import GetUserInput from './GetUserInput.js';

export default class RacingCarGame {
  constructor() {
    this.getUserInput = null;
    this.tryCountForm = document.getElementById('try-count-form');
    this.gameResultContainer = document.getElementById('game-result-container');
    this.racingCountInput = document.getElementById('racing-count-input');
    this.gameStatus = document.getElementById('game-status');
    this.gameResult = document.getElementById('game-result');
    this.tryCountForm.hidden = true;
    this.gameResultContainer.hidden = true;
    this.play();
  };

  carNameButtonClick() {
    const isValid = this.getUserInput.getCars();

    this.racingCountInput.value = null;
    this.gameResultContainer.hidden = true;
    if (isValid === 1) {
      this.tryCountForm.hidden = false;
    }
  };

  countButtonClick() {
    const isValid = getUserInput.getCount();

    this.gameStatus.innerHTML = '';
    this.gameResult.innerHTML = '';
    if (isValid === 1) {
      const game = new RacingCarGame(this.getUserInput.cars, this.getUserInput.count);
      game.play();
      this.gameResultContainer.hidden = false;
    }
  }

  play() {
    document.addEventListener('click', function(event) {
      const id = event.target.id;
      if (id === 'car-names-submit') {
        this.getUserInput = new GetUserInput();
        carNameButtonClick();
      }
      if (id === 'racing-count-submit') {
        countButtonClick();
      }
    });    
  }
}

new RacingCarGame();
