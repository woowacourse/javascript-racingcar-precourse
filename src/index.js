/* eslint-disable class-methods-use-this */
import Car from './Car.js';
import { isValidCarNames, isRacingCountValid } from './utils/utils.js';
import { $, hideElement, showElement } from './dom/helpers.js';

class App {
  constructor() {
    this.remainingRacingCount = 0;
  }

  init() {
    this.hideElements();
    this.setEventListner();
  }

  hideElements() {
    hideElement('#racing-count-heading');
    hideElement('#racing-count-form');
    hideElement('#result-heading');
  }

  setEventListner() {
    $('#car-names-form').addEventListener('submit', (e) => {
      e.preventDefault();
    });
    $('#racing-count-form').addEventListener('submit', (e) => {
      e.preventDefault();
    });

    $('#car-names-submit').addEventListener('click', () => {
      const inputString = $('#car-names-input').value.trim();
      const nameList = inputString.split(',').map((name) => name.trim());

      if (!isValidCarNames(nameList)) {
        alert('잘못된 입력입니다.');
        $('#car-names-input').value = '';

        return;
      }

      const carList = nameList.map((name) => new Car(name));

      console.log(carList);

      showElement('#racing-count-heading');
      showElement('#racing-count-form');
    });

    $('#racing-count-submit').addEventListener('click', () => {
      const racingCount = $('#racing-count-input').valueAsNumber;

      if (!isRacingCountValid(racingCount)) {
        alert('잘못된 입력입니다.');
        $('#racing-count-input').value = '';

        return;
      }

      this.remainingRacingCount = racingCount;

      console.log(this);
    });
  }
}

(() => {
  const app = new App();
  app.init();
})();
