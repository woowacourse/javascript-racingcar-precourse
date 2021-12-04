import { $ } from './utils/dom.js';
import Car from './Car.js';

class RacingCarGame {
  constructor() {
    this.addEventListeners();
    this.cars = [];
    this.tryCount = 0;
  }

  addEventListeners() {
    $('#car-names-submit').addEventListener('click', this.onClickCarNameSubmitButton.bind(this));
    $('#racing-count-submit').addEventListener(
      'click',
      this.onClickTryCountSubmitButton.bind(this),
    );
  }

  onClickCarNameSubmitButton(event) {
    event.preventDefault();
    this.cars = [];
    const carNames = $('#car-names-input').value;
    if (!carNames) {
      alert('자동차를 입력해주세요');
      return;
    }
    const splittedCarNames = carNames.split(',');
    if (this.checkCarNameDuplicated(splittedCarNames)) {
      alert('자동차 이름이 겹쳤습니다.');
      return;
    }

    if (!this.checkCarNameUnderFiveLetter(splittedCarNames)) {
      alert('자동차 5자가 넘습니다.');
      return;
    }

    splittedCarNames.forEach(carName => {
      this.cars.push(new Car(carName));
    });

    this.playRacingCarGame();
  }

  onClickTryCountSubmitButton(event) {
    event.preventDefault();
    const submitTryCount = $('#racing-count-input').value;

    if (this.checkTryCountLessThanZero(submitTryCount)) {
      alert('시도 횟수는 0보다 커야합니다.');
      return;
    }

    this.tryCount = submitTryCount;
    this.playRacingCarGame();
  }

  playRacingCarGame() {
    if (this.cars.length === 0 || this.tryCount === 0) {
      return;
    }
    for (let i = 0; i < this.tryCount; i += 1) {
      this.cars.forEach(car => car.advanceCar());
    }
  }

  checkTryCountLessThanZero(tryCount) {
    return tryCount <= 0;
  }

  checkCarNameDuplicated(splittedCarNames) {
    const set = new Set();
    splittedCarNames.forEach(carName => set.add(carName));
    return set.size !== splittedCarNames.length;
  }

  checkCarNameUnderFiveLetter(splittedCarNames) {
    for (let i = 0; i < splittedCarNames.length; i += 1) {
      if (splittedCarNames[i].length > 5) return false;
    }
    return true;
  }
}

new RacingCarGame();
