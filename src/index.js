/* eslint-disable class-methods-use-this */

import Car from './Car.js';
import { isValidCarNames, isRacingCountValid } from './utils/utils.js';
import { $, hideElement, showElement } from './dom/helpers.js';

class App {
  constructor() {
    this.carList = [];
    this.racingCount = 0;
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

      this.carList = nameList.map((name) => new Car(name));

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

      this.racingCount = racingCount;

      showElement('#result-heading');

      this.play();
    });
  }

  getRaceResult() {
    return this.carList.map((car) => car.race());
  }

  raceResultParagraphTemplate(raceResultList) {
    const raceResultStringList = raceResultList.map(
      (result) => `${result.name}: ${'-'.repeat(result.distance)}`
    );
    const raceResultParagraph = `<p>${raceResultStringList.join('<br>')}</p>`;

    return raceResultParagraph;
  }

  getRaceFinalResult() {
    const maxDistance = Math.max(...this.carList.map((car) => car.distance));
    return this.carList.filter((car) => car.distance === maxDistance);
  }

  getWinnerNameList() {
    return this.getRaceFinalResult().map((winner) => winner.name);
  }

  winnerMessageTemplate(winnerNameList) {
    const winnerMessage = winnerNameList.join(',');
    return `<p>최종 우승자: <span id="racing-winners">${winnerMessage}</span></p>`;
  }

  play() {
    const resultDivContents = [];

    for (let idx = 0; idx < this.racingCount; idx += 1) {
      const raceResultList = this.getRaceResult();
      const raceResultParagraph =
        this.raceResultParagraphTemplate(raceResultList);

      resultDivContents.push(raceResultParagraph);
    }

    const res = resultDivContents.join('');
    const resultDiv = `<div id="result-div">${res}</div>`;

    $('#app').insertAdjacentHTML('beforeend', resultDiv);

    const winnerNameList = this.getWinnerNameList();
    $('#app').insertAdjacentHTML(
      'beforeend',
      this.winnerMessageTemplate(winnerNameList)
    );
  }
}

(() => {
  const app = new App();
  app.init();
})();
