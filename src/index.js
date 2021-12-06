import { extractNames, isCarEnough, isNameTooLong } from './getNameInput.js';
import { isTrialEnough } from './getNumberInput.js';
import { Car } from './car.js';
import { printResult, printRacing, printFinalWinnerIs } from './printResult.js';

export class RacingCarGame {
  constructor() {
    this.setElements();
    this.setButton();
    this.setDisplay();

    this.players = [];
    this.carNames = [];
    this.racingCount = 0;
    this.winners = [];
  }

  setElements() {
    this.nameSubmitInput = document.getElementById('car-names-input');
    this.nameSubmitButton = document.getElementById('car-names-submit');
    this.numberSubmitInput = document.getElementById('racing-count-input');
    this.numberSubmitButton = document.getElementById('racing-count-submit');
  }

  setButton() {
    this.nameSubmitButton.addEventListener('click', this.getNameInput);
    this.numberSubmitButton.addEventListener('click', this.getNumberInput);
  }

  setDisplay() {
    this.numberSubmitInput.style.display = 'None';
    this.numberSubmitButton.style.display = 'None';
  }

  getNameInput = () => {
    const nameEntered = this.nameSubmitInput.value;
    if (isCarEnough(nameEntered)) {
      this.carNames = extractNames(nameEntered);
    }
    isNameTooLong(this.carNames);
    this.makePlayers();
    this.showNumberSubmit();
  };

  showNumberSubmit = () => {
    this.numberSubmitInput.style.display = '';
    this.numberSubmitButton.style.display = '';
  };

  makePlayers = () => {
    for (let i = 0; i < this.carNames.length; i++) {
      const player = new Car(this.carNames[i], 0);
      this.players.push(player);
    }
  };

  getNumberInput = () => {
    const racingCountEntered = this.numberSubmitInput.value;
    if (isTrialEnough(racingCountEntered)) {
      this.racingCount = racingCountEntered;
    }
    this.play();
    this.chooseWinner();
    printFinalWinnerIs();
    printResult(this.winners);
  };

  play = () => {
    for (let i = 0; i < this.racingCount; i++) {
      this.playersMoveByCount();
      printRacing(this.players);
    }
  };

  playersMoveByCount = () => {
    for (let i = 0; i < this.players.length; i++) {
      this.players[i].Move();
    }
  };

  chooseWinner = () => {
    let max = 0;
    for (let i = 0; i < this.players.length; i++) {
      if (this.players[i].location >= max) {
        max = this.players[i].location;
      }
    }
    for (let i = 0; i < this.players.length; i++) {
      if (this.players[i].location === max) {
        this.winners.push(this.players[i].name);
      }
    }
  };
}

new RacingCarGame();
