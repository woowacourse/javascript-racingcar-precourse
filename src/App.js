import Car from './class/Car.js';
import CarNameFrom from './component/CarNameForm.js';
import RacingCountForm from './component/RacingCountForm.js';

import {
  ID_APP,
  ID_RSULT,
  ID_RACING_WINNERS_TITLE,
  ID_RACING_WINNERS,
} from './constant/selector.js';

export default class App {
  constructor() {
    this.cars = [];
    this.racingCount = null;
    this.$app = document.getElementById(ID_APP);
    this.carNameForm = new CarNameFrom();
    this.racingCountForm = new RacingCountForm();
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
    this.carNameForm.addSubmitClickEventHandler(this.carNamesSubmitClickEventHandler.bind(this));
    this.racingCountForm.addSubmitClickEventHandler(this.racingCountSubmitClickEventHandler.bind(this));
  }

  carNamesSubmitClickEventHandler(e) {
    e.preventDefault();

    const carNames = this.carNameForm.processInputValue();
    const isValid = this.carNameForm.checkValidInputValue(carNames);

    if (isValid) {
      this.generateCar(carNames);
    }
  }

  generateCar(carNames) {
    this.cars = carNames.map((name) => {
      return new Car(name);
    });
  }

  racingCountSubmitClickEventHandler(e) {
    e.preventDefault();

    this.initializeResult();
    const racingCount = this.racingCountForm.getInputValue();
    const isValid = this.racingCountForm.checkValidInputValue(this.cars, racingCount);

    if (isValid) {
      this.racingCount = Number(racingCount);
      this.startGame();
    }
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
