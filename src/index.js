import { $ } from './utils/dom.js';
import Car from './Car.js';

class RacingCarGame {
  constructor() {
    this.addEventListeners();
    this.addDOM();
    this.cars = [];
    this.tryCount = 0;
  }

  addDOM() {
    const div = document.createElement('div');
    const span = document.createElement('span');

    div.id = 'racing-car-results';
    span.id = 'racing-winners';

    $('#app').appendChild(div);
    $('#app').appendChild(span);
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
    if (this.cars.length === 0 || this.tryCount === 0) return;

    let resultStirng = '';
    this.cars.forEach(car => car.resetAdvance());

    for (let i = 0; i < this.tryCount; i += 1) {
      // eslint-disable-next-line no-loop-func
      this.cars.forEach(car => {
        car.advanceCar();
        resultStirng += `<div>${car.printAdvance()}</div>`;
      });
      resultStirng += '<br />';
    }
    this.printGameResult(resultStirng);
    const winners = this.checkWinners(this.cars);
    this.printWinners(winners);
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

  printGameResult(result) {
    $('#racing-car-results').innerHTML = '';
    $('#racing-car-results').innerHTML = result;
  }

  checkWinners(cars) {
    let maximumAdvance = 0;
    cars.forEach(car => {
      if (car.advance > maximumAdvance) maximumAdvance = car.advance;
    });

    const winners = cars.filter(car => car.advance === maximumAdvance);
    return winners;
  }

  printWinners(winners) {
    const winnerString = `최종 우승자: ${winners.map(i => i.name).join(',')}`;
    $('#racing-winners').innerHTML = winnerString;
  }
}

new RacingCarGame();
