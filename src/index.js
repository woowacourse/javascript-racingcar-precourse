import AppContainer from './app-container.js';
import Util from './util.js';
import Car from './car.js';

export default class RacingCarGame {
  constructor() {
    new AppContainer(document.getElementById('app'), this);
    this.cars = [];
    this.racingCount = 0;
    this.isEnd = false;
  }

  start() {
    if (this.racingCount === 0) return;

    this.cars.forEach((car) => {
      car.moveCount = Array
          .from(
              {length: this.racingCount},
              () => this.isForward(Util.getRandomNumbers()),
          )
          .reduce(this.moveCountReducer, []);
    });

    this.isEnd = true;
    console.log(this.cars);
  }

  setCars(carNames) {
    carNames = this.splitCarNamesWithComma(carNames);

    if (!this.isValidCarNames(carNames)) {
      return this.alertInvalidCarName(carNames);
    }

    this.cars = carNames.map(carName => new Car(carName));
    console.log(this.cars);
  }

  setRacingCount(racingCount) {
    if (!this.isValidRacingCount(racingCount)) {
      return this.alertInvalidRacingCount(racingCount);
    }

    this.racingCount = racingCount;
    console.log(this.racingCount);
  }

  splitCarNamesWithComma(carNames) {
    return carNames.split(',')
        .filter(carName => carName.trim().length !== 0)
        .map(carName => carName.trim());
  }

  alertInvalidCarName(carNames) {
    if (carNames.length === 0) {
      return alert('자동차 이름을 입력해주세요.');
    }

    if (this.isOutOfLength(carNames)) {
      return alert('자동차 이름은 5자 이하로 입력해주세요.');
    }

    alert('자동차 이름을 중복되지 않게 입력해주세요.');
  }

  alertInvalidRacingCount(racingCount) {
    if (racingCount < 1) {
      return alert('1 이상의 숫자를 입력해주세요.');
    }
  }

  moveCountReducer(accumulator, currentValue, i) {
    const previousValue = accumulator[i-1];

    if (previousValue) {
      accumulator.push(previousValue + currentValue);
    } else {
      accumulator.push(currentValue);
    }

    return accumulator;
  }

  isForward(randomNumber) {
    if (randomNumber >= 4) return 1;

    return 0;
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
