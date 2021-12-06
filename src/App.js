import Car from './class/Car.js';

import {
  checkNameLength,
  checkEmptyName,
  checkDuplicateName,
  checkExistingCar,
  checkValidNumber,
} from './utils/validation.js';

import {
  ID_APP,
  ID_CAR_NAMES_INPUT,
  ID_CAR_NAMES_SUBMIT,
  ID_RACING_COUNT_INPUT,
  ID_RACING_COUNT_SUBMIT,
  ID_RSULT,
  ID_RACING_WINNERS_TITLE,
  ID_RACING_WINNERS,
} from './constant/selector.js';
import { INPUT_NAME_ERROR, INPUT_RACING_COUNT_ERROR } from './constant/error.js';

export default class App {
  constructor() {
    this.cars = [];
    this.racingCount = null;
    this.$app = document.getElementById(ID_APP);
    this.$carNamesInput = document.getElementById(ID_CAR_NAMES_INPUT);
    this.$carNamesSubmit = document.getElementById(ID_CAR_NAMES_SUBMIT);
    this.$racingCountInput = document.getElementById(ID_RACING_COUNT_INPUT);
    this.$racingCountSubmit = document.getElementById(ID_RACING_COUNT_SUBMIT);
  }

  init() {
    this.addElement();
    this.addEvent();
  }

  addElement() {
    this.addResultElement();
    this.addRacingWinnersTitleElement();
    this.addRacingWinnersElement();
  }

  addResultElement() {
    const $result = document.createElement('div');
    $result.setAttribute('id', ID_RSULT);
    $result.setAttribute('hidden', true);
    
    this.$app.appendChild($result);

    this.$result = $result;
  }

  addRacingWinnersTitleElement() {
    const $racingWinnersTitle = document.createElement('span');
    $racingWinnersTitle.setAttribute('id', ID_RACING_WINNERS_TITLE,);
    $racingWinnersTitle.setAttribute('hidden', true);
    this.$app.appendChild($racingWinnersTitle);

    this.$racingWinnersTitle = $racingWinnersTitle
  }

  addRacingWinnersElement() {
    const $racingWinners = document.createElement('span');
    $racingWinners.setAttribute('id', ID_RACING_WINNERS);
    $racingWinners.setAttribute('hidden', true);
    this.$app.appendChild($racingWinners);

    this.$racingWinners = $racingWinners;
  }

  addEvent() {
    this.$carNamesSubmit.addEventListener(
      'click',
      this.carNamesSubmitClickEventHandler.bind(this)
    );
    this.$racingCountSubmit.addEventListener(
      'click',
      this.racingCountSubmitClickEventHandler.bind(this)
    );
  }

  carNamesSubmitClickEventHandler(e) {
    e.preventDefault();

    const carNames = this.processInputNameValue();
    const isValid = this.checkValidInputNameValue(carNames);

    if (isValid) {
      this.generateCar(carNames);
    }
  }

  processInputNameValue() {
    const carNames = this.$carNamesInput.value.split(',').map((name) => {
      return name.trim();
    });

    return carNames;
  }

  checkValidInputNameValue(carNames) {
    const checkingResults = [
      checkNameLength(carNames),
      checkEmptyName(carNames),
      checkDuplicateName(carNames),
    ];

    const isAllPass = checkingResults.every((result) => result);

    if (!isAllPass) {
      this.handleInpuNameException(checkingResults);
    }

    return isAllPass;
  }

  handleInpuNameException(checkingResults) {
    const errorCode = checkingResults.indexOf(false);
    const errorMessage = INPUT_NAME_ERROR[errorCode];

    alert(errorMessage);
    this.$carNamesInput.focus();
  }

  generateCar(carNames) {
    this.cars = carNames.map((name) => {
      return new Car(name);
    });
  }

  racingCountSubmitClickEventHandler(e) {
    e.preventDefault();

    this.initializeResult();
    const racingCount = this.$racingCountInput.value;
    const isValid = this.checkValidRacingCountValue(racingCount);

    if (isValid) {
      this.racingCount = Number(racingCount);
      this.startGame();
    }
  }

  checkValidRacingCountValue(racingCount) {
    const checkingResults = [
      checkExistingCar(this.cars),
      checkValidNumber(racingCount),
    ];

    const isAllPass = checkingResults.every((result) => result);

    if (!isAllPass) {
      this.handleInputRacingCountException(checkingResults);
    }

    return isAllPass;
  }

  handleInputRacingCountException(checkingResults) {
    const errorCode = checkingResults.indexOf(false);
    const errorMessage = INPUT_RACING_COUNT_ERROR[errorCode];

    alert(errorMessage);
    this.$racingCountInput.focus();
  }

  startGame() {
    for (let i = 0; i < this.racingCount; i++) {
      this.race();
    }

    const winenrList = this.findRacingWinner();
    this.rednerRacingWinner(winenrList);
    this.displayResult();
    this.initializeCars();
  }

  race() {
    this.cars.forEach((car) => {
      car.move();
      this.renderMoveResult(car);
    });

    this.renderNewLine();
  }

  renderMoveResult(car) {
    const $div = document.createElement('div');
    $div.textContent = `${car.getName()}: ${'-'.repeat(car.getNumMove())}`

    this.$result.appendChild($div);
  }

  renderNewLine() {
    const $br = document.createElement('br');
    this.$result.appendChild($br);
  }

  findRacingWinner() {
    let currentHighNumMove = 0;
    let currentWinners = []

    this.cars.forEach((car)=>{
      if (car.getNumMove() > currentHighNumMove) {
        currentHighNumMove = car.getNumMove();
        currentWinners = [car.getName()];
      } else if (car.getNumMove() == currentHighNumMove) {
        currentWinners.push(car.getName());
      }
    });

    return currentWinners;
  }

  rednerRacingWinner(winenrList) {
    this.$racingWinnersTitle.textContent = '최종 우승자: ';
    this.$racingWinners.textContent = winenrList.join(',');
  }

  displayResult() {
    this.$result.removeAttribute('hidden');
    this.$racingWinnersTitle.removeAttribute('hidden');
    this.$racingWinners.removeAttribute('hidden');
  }

  initializeResult() {
    this.$result.innerHTML = '';
    this.$racingWinnersTitle.textContent = '';
    this.$racingWinners.textContent = '';

    this.$result.setAttribute('hidden', true);
    this.$racingWinnersTitle.setAttribute('hidden', true);
    this.$racingWinners.setAttribute('hidden', true);
  }

  initializeCars() {
    this.cars = [];
  }
}
