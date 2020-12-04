import { GO_AHEAD_MAX_VALUE } from '../variables/constantNumbers.js';
import InputsControl from '../classes/checkUserInputs.js';

import {
  showContainer,
  disableInputs,
} from '../config/manipulateContainers.js';

export default class RacingCarGame {
  constructor() {
    this.$carNamesInput = document.getElementById('car-names-input');
    this.$carNamesSubmit = document.getElementById('car-names-submit');
    this.$racingCountContainer = document.getElementById('racing-count-container');
    this.$racingCountInput = document.getElementById('racing-count-input');
    this.$racingCountSubmit = document.getElementById('racing-count-submit');
    this.$resultContainer = document.getElementById('result-container');
    this.carNames = [];
    this.racingCount = null;
    this.totalDist = 0;
  }

  _createRandomNumber() {
    return Math.floor(Math.random()*(GO_AHEAD_MAX_VALUE+1));
  }

  _getWinCars() {
    return this.carNames.reduce((acc, car) => {
      if(car.pos[this.racingCount-1] === this.totalDist) acc.push(car.name);
      return acc;
    }, []);
  }

  getResult() {
    //manipulate result container
    console.log(this._getWinCars());
    showContainer(this.$resultContainer);
  }

  moveCars(turn) {
    console.log(`turn ${turn}`);
    this.carNames.forEach(car => {
      car._play(this._createRandomNumber(), turn);
      this.totalDist = Math.max(car.pos[turn-1], this.totalDist);
    });
    this.getResult();
  }
  
  play() {
    for(let turn = 1; turn <= this.racingCount; turn++) this.moveCars(turn);
  }

  checkRacingCountInput(racingCountInputData) {
    const {
      goToNextStep,
      inputData
    } = racingCountInputData.getResultOfRacingCountNumber(this.$racingCountInput);
  
    if(goToNextStep) {
      disableInputs(this.$racingCountInput, this.$racingCountSubmit);
      this.racingCount = inputData;
      return this.play();
    }
  
    return this.$racingCountInput.value = '';
  }

  userInputRacingCount() {
    this.$racingCountSubmit.addEventListener('click', () => this.checkRacingCountInput(
      new InputsControl(this.$racingCountInput.value),
    ));
  }

  submitCarNamesInput(carNames) {
    showContainer(this.$racingCountContainer);
    this.carNames = carNames;
    return this.userInputRacingCount();
  }

  checkCarNamesInput(carNamesInputData) {
    const {
      goToNextStep,
      inputData
    } = carNamesInputData.getResultOfCarNamesInput(this.$carNamesInput);
  
    if(goToNextStep) {
      disableInputs(this.$carNamesInput, this.$carNamesSubmit);
      return this.submitCarNamesInput(inputData);
    }

    return this.$carNamesInput.value = '';
  }

  userInputCarNames() {  
    this.$carNamesSubmit.addEventListener('click', () => this.checkCarNamesInput(
      new InputsControl(this.$carNamesInput.value)
    ));
  }

  startGame() {
    this.userInputCarNames();
  }
}