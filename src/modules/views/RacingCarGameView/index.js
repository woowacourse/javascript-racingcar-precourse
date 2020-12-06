import { isLongerThan, isNames, isNumber } from '../../../utils';
import { message } from '../../../constants';

export default class RacingCarGameView {
  constructor(
    RacingCarGameViewModel,
    carNamesInput,
    carNamesSubmitButtton,
    carRacingCountDiv,
    carRacingResultDiv,
  ) {
    this.racingCarGameViewModel = RacingCarGameViewModel;
    this.carNamesInput = carNamesInput;
    this.carNamesSubmitButtton = carNamesSubmitButtton;
    this.carRacingCountDiv = carRacingCountDiv;
    this.carRacingResultDiv = carRacingResultDiv;
    this.NAME_MAX_LENGTH = 5;
    this.COUNT_MIN_VALUE = 1;
    this.init();
  }

  init() {
    this.addEventListenerToCarNamesSubmitButtton();
    this.subscribeViewModel(this.racingCarGameViewModel);
  }

  handleCarNamesSubmit() {
    const splitedNames = this.carNamesInput.value.split(',');
    const errorMessage = this.validNames(splitedNames);
    if (errorMessage) {
      this.resetCarNamesInput();
      alert(errorMessage);
      return;
    }

    this.racingCarGameViewModel['_carInstances'] = splitedNames;
    this.renderRacingCountInputAndSubmitButton();
    this.addEventListenerToRacingCountSubmitButton();
  }

  handleRacingCountSubmit() {
    const racingCount = document.getElementById('#racing-count-input').value;

    const errorMessage = this.validCount(racingCount);
    if (errorMessage) {
      this.resetRacingCountInput();
      alert(errorMessage);
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

  submitRacingCount(count) {
    this.racingCarGameViewModel['_racingCount'] = count;
  }

  subscribeViewModel(target) {
    target.registerViews(this);
  }

  updateChange(target) {
    this.renderIntermediateResult(target['_carInstances']);
  }

  validNames(names) {
    if (!isNames(names)) {
      return message.WARNING_FOR_WHITE_SPACE;
    }
    if (isLongerThan(names, this.NAME_MAX_LENGTH)) {
      return message.WARNING_FOR_NAME_LONGER_THAN_FIVE;
    }

    return '';
  }

  validCount(count) {
    if (!isNumber(parseInt(count))) {
      return message.WARNING_FOR_COUNT_NOT_NUMBER;
    }
    if (parseInt(count) < this.COUNT_MIN_VALUE) {
      return message.WARNING_FOR_COUNT_LOWER_THAN_ONE;
    }

    return '';
  }

  decideWinners(cars) {
    const winnerDistance = cars[0].moveForwardDistance;

    const winners = cars.reduce((acc, cur) => {
      if (cur.moveForwardDistance === winnerDistance) {
        return acc.concat([cur.name]);
      }

      return acc;
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
      <h4>${message.ASK_INPUT_COUNT_NUMBER}</h4>
      <input type="number" id="#racing-count-input"/>
      <button id="#racing-count-submit">${message.SUBMIT_COUNT}</button>
    `;
  }

  renderResultHeading() {
    this.carRacingResultDiv.innerHTML += `<h4>${message.RESULT_HEADING}</h4>`;
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
        ${message.LAST_WINNERS}: ${winnersString}
      </div>
    `;
  }

  renderResult(count) {
    this.renderResultHeading();
    this.submitRacingCount(count);
    this.renderWinners(this.racingCarGameViewModel['_carInstances']);
  }
}
