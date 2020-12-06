import Car from './car.js';
import {
  isNotProperCarNames,
  isNotProperRacingCountInputValue,
} from './valid.js';
import { DOMs, DOMCtrl } from './doms.js';

export default class RacingCarGame {
  constructor() {
    this.cars = [];
    this.racingCount = 0;

    this.setEventListeners();
    DOMCtrl.hideUIs();
    DOMCtrl.resetCarNameInput();
  }

  setEventListeners() {
    this.handleCarNameInput = this.handleCarNameInput.bind(this);
    DOMs.carNameBtn.addEventListener('click', this.handleCarNameInput);
    DOMs.carNameInput.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        this.handleCarNameInput();
      }
    });
    this.handleRacingCountInput = this.handleRacingCountInput.bind(this);
    DOMs.racingCountBtn.addEventListener('click', this.handleRacingCountInput);
    DOMs.racingCountInput.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        this.handleRacingCountInput();
      }
    });
  }

  /*
   * tests whether the input value and each of car names are proper.
   * if it is, then create Car objects and show UIs about racing count.
   */
  handleCarNameInput() {
    const carNameInputValue = DOMs.carNameInput.value;
    const carNames = this.getCarNames(carNameInputValue);
    if (isNotProperCarNames(carNames)) {
      DOMCtrl.resetCarNameInput();
      return;
    }
    this.setCarObjects(carNames);
    DOMCtrl.showRacingCountUI();
  }

  getCarNames(inputValue) {
    return inputValue.split(',').map(name => name.trim());
  }

  // create Car objects with car names.
  setCarObjects(carNames) {
    const newCars = carNames.map(carName => new Car(carName));
    this.cars = newCars;
  }

  /*
   * tests whether racing count input is proper.
   * if it is, then start a new race and print the result on the page.
   */
  handleRacingCountInput() {
    const racingCountInputValue = DOMs.racingCountInput.value;
    if (isNotProperRacingCountInputValue(racingCountInputValue)) {
      DOMCtrl.resetRacingCountInput();
      return;
    }
    this.racingCount = +racingCountInputValue;
    this.resetPrevRace();
    DOMCtrl.showResultUI();
    this.startRace();
    this.printWinnersName();
  }

  resetPrevRace() {
    this.cars.forEach(car => {
      car.resetRaceResult();
    });
    DOMs.resultBoard.textContent = '';
  }

  startRace() {
    for (let i = 0; i < this.racingCount; i++) {
      this.printTrialResult(this.cars);
    }
  }

  printTrialResult(cars) {
    const trialResult = document.createElement('p');
    let resultContent = '';
    cars.forEach(car => {
      car.getTrialResult();
      resultContent += `${car.carName}: ${car.raceResult}<br>`;
    });
    trialResult.innerHTML = resultContent;
    DOMs.resultBoard.appendChild(trialResult);
  }

  printWinnersName() {
    const winnersName = document.createElement('p');
    const winners = this.getWinnersName();
    winnersName.textContent = `최종 우승자: ${winners.join(', ')}`;
    DOMs.resultBoard.appendChild(winnersName);
  }

  // compare the results and select a winner(or winners).
  getWinnersName() {
    let winnerLength = 0;
    return this.cars.reduce((winners, car) => {
      const carResultLength = car.raceResult.length;
      let newWinners = winners;
      if (carResultLength === winnerLength) {
        newWinners = winners.concat(car.carName);
      } else if (carResultLength > winnerLength) {
        winnerLength = carResultLength;
        newWinners = [car.carName];
      }
      return newWinners;
    }, []);
  }
}

new RacingCarGame();
