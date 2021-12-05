import { $ } from './utils/dom.js';
import CarNameValidator from './validators/CarNameValidator.js';
import TryCountValidator from './validators/TryCountValidator.js';

import Car from './components/Car.js';
import RacingCountForm from './components/RacingCountForm.js';
import RacingResult from './components/RacingResult.js';
import RacingWinner from './components/RacingWinner.js';

class RacingCarGame {
  constructor() {
    this.cars = [];
    this.tryCount = 0;
    this.$racingCountForm = new RacingCountForm();
    this.$racingResult = new RacingResult();
    this.$racingWinner = new RacingWinner();
    this.init();
    this.addEventListeners();
  }

  init() {
    this.$racingResult.createDOM();
    this.$racingWinner.createDOM();
    this.$racingCountForm.hide();
    this.$racingResult.hide();
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
    const splittedCarNames = $('#car-names-input').value.split(',');
    if (!this.validateCarNames(splittedCarNames)) return;
    splittedCarNames.forEach(carName => this.cars.push(new Car(carName)));
    this.$racingCountForm.show();
    this.playRacingCarGame();
  }

  validateCarNames(splittedCarNames) {
    return (
      CarNameValidator.checkAtLeastOneCar(splittedCarNames) &&
      CarNameValidator.checkCarNameDuplicated(splittedCarNames) &&
      CarNameValidator.checkCarNameUnderFiveLetter(splittedCarNames)
    );
  }

  onClickTryCountSubmitButton(event) {
    event.preventDefault();
    const submitTryCount = $('#racing-count-input').value;
    if (!TryCountValidator.checkTryCountLessThanZero(submitTryCount)) return;
    this.tryCount = submitTryCount;
    this.playRacingCarGame();
  }

  playRacingCarGame() {
    if (!this.checkExistCarAndTryCount(this.cars, this.tryCount)) return;
    this.$racingResult.show();
    this.resetCarsAdvance();

    let resultStirng = '';
    for (let i = 0; i < this.tryCount; i += 1) {
      resultStirng += this.printCarsAdvance();
    }
    this.printGameResult(resultStirng);
    const winners = this.checkWinners(this.cars);
    this.printWinners(winners);
  }

  checkExistCarAndTryCount(cars, tryCount) {
    return cars.length !== 0 && tryCount !== 0;
  }

  resetCarsAdvance() {
    this.cars.forEach(car => car.resetAdvance());
  }

  printCarsAdvance() {
    let carsAdvanceString = '';
    this.cars.forEach(car => {
      car.advanceCar();
      carsAdvanceString += `<div>${car.printAdvance()}</div>`;
    });
    carsAdvanceString += '<br />';
    return carsAdvanceString;
  }

  printGameResult(result) {
    $('#racing-car-result-container').innerHTML = '';
    $('#racing-car-result-container').innerHTML = result;
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
    $('#racing-winner-container').innerHTML = '';
    const winnerTemplate = `
      <div>
        최종 우승자: 
        <span id="racing-winners">${winners.map(i => i.name).join(',')}</span>
      </div>
    `;
    $('#racing-winner-container').innerHTML = winnerTemplate;
  }
}

new RacingCarGame();
