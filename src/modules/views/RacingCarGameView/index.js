import { isLongerThan, isNames, isZero, isNumber } from '../../../utils';
import { text } from '../../../constants';

export default class RacingCarGameView {
  constructor(
    RacingCarGame,
    carNamesInput,
    carNamesSubmitButtton,
    carRacingCountDiv,
    carRacingResultDiv,
  ) {
    this.RacingCarGame = RacingCarGame;
    this.carNamesInput = carNamesInput;
    this.carNamesSubmitButtton = carNamesSubmitButtton;
    this.carRacingCountDiv = carRacingCountDiv;
    this.carRacingResultDiv = carRacingResultDiv;
    this.init();
  }

  init() {
    this.addEventListenerToCarNamesSubmitButtton();
  }

  handleCarNamesSubmit() {
    const splitedNames = this.carNamesInput.value.split(',');
    const exception = this.validNames(splitedNames);
    if (exception) {
      this.resetCarNamesInput();
      alert(exception);
      return;
    }

    this.RacingCarGame.makeCarInstances(splitedNames);
    this.renderRacingCountInputAndSubmitButton();
  }

  handleRacingCountSubmit() {
    const racingCount = document.getElementById('#racing-count-input').value;
    const exception = this.validCount(racingCount);
    if (exception) {
      this.resetRacingCountInput();
      alert(exception);
      return;
    }

    this.renderResult(racingCount);
  }

  addEventListenerToRacingCountSubmitButton() {
    document
      .getElementById('#racing-count-submit')
      .addEventListener('click', this.handleRacingCountSubmit.bind(this));
  }

  addEventListenerToCarNamesSubmitButtton() {
    this.carNamesSubmitButtton.addEventListener(
      'click',
      this.handleCarNamesSubmit.bind(this),
    );
  }

  validNames(names) {
    if (!isNames(names)) {
      return text.WARNING_FOR_WHITE_SPACE;
    }
    if (isLongerThan(names, 5)) {
      return text.WARNING_FOR_NAME_LONGER_THAN_FIVE;
    }

    return '';
  }

  validCount(count) {
    if (!isNumber(count)) {
      return text.WARNING_FOR_COUNT_NOT_NUMBER;
    }
    if (isZero(count)) {
      return text.WARNING_FOR_COUNT_ZERO;
    }

    return '';
  }

  decideWinners(cars) {
    const winnerDistance = cars[0].moveForwardDistance;

    const winners = cars.reduce((accumulator, car) => {
      if (car.moveForwardDistance === winnerDistance) {
        return accumulator.concat([car.name]);
      }

      return accumulator;
    }, []);

    return winners;
  }

  resetCarNamesInput() {
    this.carNamesInput.value = '';
  }

  resetRacingCountInput() {
    const racingCountInput = document.getElementById('#racing-count-input');
    racingCountInput.value = '';
  }

  renderRacingCountInputAndSubmitButton() {
    this.carRacingCountDiv.innerHTML = `
      <h4>${text.ASK_INPUT_COUNT_NUMBER}</h4>
      <input type="number" id="#racing-count-input"/>
      <button id="#racing-count-submit">${text.SUBMIT_COUNT}</button>
    `;

    this.addEventListenerToRacingCountSubmitButton();
  }

  renderResultHeading() {
    this.carRacingResultDiv.innerHTML += `<h4>${text.RESULT_HEADING}</h4>`;
  }

  renderIntermediateResult(cars) {
    let intermediateResult = ``;
    cars.forEach(car => {
      let hyphens = '-'.repeat(car.moveForwardDistance);
      intermediateResult += `<p">${car.name} : ${hyphens}</p>`;
    });
    this.carRacingResultDiv.innerHTML += `
      <div class="car-intermediate-result-container">
        ${intermediateResult}
      </div>
    `;
  }

  renderWinners(cars) {
    const sortedCars = [...cars];
    sortedCars.sort((a, b) => {
      return b.moveForwardDistance - a.moveForwardDistance;
    });
    const winners = this.decideWinners(sortedCars);
    const winnersString = winners.join(', ');

    this.carRacingResultDiv.innerHTML += `
      <div>
        ${text.LAST_WINNERS}: ${winnersString}
      </div>
    `;
  }

  renderResult(count) {
    this.renderResultHeading();

    for (let i = 0; i < count; i++) {
      this.RacingCarGame.gameContinue();
      this.renderIntermediateResult(this.RacingCarGame.getCarInstances());
    }

    this.renderWinners(this.RacingCarGame.getCarInstances());
  }
}
