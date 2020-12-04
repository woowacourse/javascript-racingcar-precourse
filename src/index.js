import * as RacingUtil from './racing-util.js';
import Car from './car.js';

export default class RacingCarGame {
  constructor(app) {
    app.onclick = this.onClick.bind(this);
    this.carNames = [];
    this.racingCount = 0;
  }

  start() {
    if (this.racingCount === 0) return;

    const racingCars = this.carNames.map(carName => new Car(carName));

    racingCars.forEach((car) => {
      car.randomRacingNumbers = RacingUtil.randomNumbers(this.racingCount);
    });

    this.showRacingResult(racingCars);

    console.log(racingCars);
  }

  showRacingResult(racingCars) {
    const resultArea = document.getElementById('result');

    for (let i = 0; i < this.racingCount; ++i) {
      const racingResult = this.getRacingResult(racingCars, i);
      console.log(racingResult);
    }
  }

  getRacingResult(racingCars, racingOrder) {
    return racingCars.map(racingCar =>
      RacingUtil.isForward(racingCar.randomRacingNumbers[racingOrder]),
    );
  }

  setCarNames(carNames) {
    carNames = this.splitCarNamesWithComma(carNames);

    if (!this.isValidCarNames(carNames)) {
      return this.invaildCarNameAlert(carNames);
    }

    this.carNames = carNames;
    console.log(this.carNames);
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

  showRacingCount() {
    if (this.carNames.length > 0) {
      document.getElementById('racing-count').hidden = false;
    }
  }

  onClick(event) {
    if (event.target.id === 'car-names-submit') {
      const carNames = document.getElementById('car-names-input').value;

      this.setCarNames(carNames);
      this.showRacingCount();
    }

    if (event.target.id === 'racing-count-submit') {
      const racingCount = document.getElementById('racing-count-input').value;

      this.setRacingCount(racingCount);
      this.start();
    }
  }
}


new RacingCarGame(document.getElementById('app'));
