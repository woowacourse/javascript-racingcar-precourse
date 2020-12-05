import * as RacingUtil from './racing-util.js';
import AppContainer from './app-container.js';
import {printRacingResult, printWinnersName} from './print.js';
import Car from './car.js';

export default class RacingCarGame {
  constructor() {
    this.cars = [];
    this.racingCount = 0;
    new AppContainer(document.getElementById('app'), this);
  }

  start() {
    if (this.racingCount === 0) return;

    this.cars.forEach((car) => {
      car.randomRacingNumbers = RacingUtil.randomNumbers(this.racingCount);
    });

    document.getElementById('result').hidden = false;

    printRacingResult(this.cars, this.racingCount);
    printWinnersName(this.cars);
    document.getElementById('racing-count-submit').disabled = true;
    console.log(this.cars);
  }

  setCars(carNames) {
    carNames = this.splitCarNamesWithComma(carNames);

    if (!this.isValidCarNames(carNames)) {
      return this.invaildCarNameAlert(carNames);
    }

    this.cars = carNames.map(carName => new Car(carName));
    console.log(this.cars);
  }

  setRacingCount(racingCount) {
    if (!this.isValidRacingCount(racingCount)) {
      return this.invaildRacingCountAlert(racingCount);
    }

    this.racingCount = racingCount;
    console.log(this.racingCount);
  }

  splitCarNamesWithComma(carNames) {
    return carNames.split(',')
        .filter(carName => carName.trim().length !== 0)
        .map(carName => carName.trim());
  }

  invaildCarNameAlert(carNames) {
    if (carNames.length === 0) {
      return alert('자동차 이름을 입력해주세요.');
    }

    if (this.isOutOfLength(carNames)) {
      return alert('자동차 이름은 5자 이하로 입력해주세요.');
    }

    alert('자동차 이름을 중복되지 않게 입력해주세요.');
  }

  invaildRacingCountAlert(racingCount) {
    if (racingCount < 1) {
      return alert('1 이상의 숫자를 입력해주세요.');
    }
  }

  isValidCarNames(carNames) {
    if (carNames.length === 0
      || this.isOutOfLength(carNames)
      || this.isDuplicate(carNames)) {
      return false;
    }

    return true;
  }

  isValidRacingCount(racingCount) {
    if (racingCount < 1) return false;

    return true;
  }

  isOutOfLength(carNames) {
    return carNames.some(carName => carName.length > 5);
  }

  isDuplicate(carNames) {
    return carNames.some(carName =>
      carNames.indexOf(carName) !== carNames.lastIndexOf(carName),
    );
  }
}

new RacingCarGame();
