import RacingCarModel from '../model/RacingCarModel.js';
import { hideElement, showElement } from '../utils/dom.js';

class RacingCarView {
  constructor() {
    this.$racingCountSubmitButton = document.querySelector('#racing-count-submit');
    this.$racingCountInput = document.querySelector('#racing-count-input');
    this.$carNamesInput = document.querySelector('#car-names-input');
    this.$carNamesSubmitButton = document.querySelector('#car-names-submit');
    this.$app = document.querySelector('#app');
    this.$racingCountForm = document.querySelector('#racing-count-form');
    this.$racingResultHeading = document.querySelector('#racing-result-heading');
    this.$racingCountHeading = document.querySelector('#racing-count-heading');

    this.$winnerTextDiv = document.createElement('div');
    this.$winnerTextSpan = document.createElement('span');
    this.$resultTextDiv = document.createElement('div');
    this.resetDOM();
  }

  resetDOM() {
    this.makeDOM();
    this.hideDOM();
  }

  makeDOM() {
    this.$app.appendChild(this.$resultTextDiv);
    this.$winnerTextSpan.setAttribute('id', 'racing-winners');
    this.$app.appendChild(this.$winnerTextDiv);
    this.$winnerTextDiv.innerText = '최종 우승자: ';
    this.$winnerTextDiv.appendChild(this.$winnerTextSpan);
  }

  hideDOM() {
    hideElement(this.$racingCountHeading);
    hideElement(this.$racingCountForm);
    hideElement(this.$racingResultHeading);
    hideElement(this.$winnerTextDiv);
  }

  showWinner(winner) {
    this.$winnerTextSpan.innerHTML = winner;
  }

  showRoundResult(roundResult) {
    this.$resultTextDiv.innerHTML = roundResult;
  }

  showResultDOM() {
    showElement(this.$racingResultHeading);
    showElement(this.$winnerTextDiv);
  }

  showCountDOM() {
    showElement(this.$racingCountHeading);
    showElement(this.$racingCountForm);
  }

  setOnCountSubmit(fn) {
    this.$racingCountSubmitButton.addEventListener('click', (e) => {
      e.preventDefault();
      const racingCount = this.$racingCountInput.value;
      fn(racingCount);
    });
  }

  setOnCarNamesSubmit(fn) {
    this.$carNamesSubmitButton.addEventListener('click', (e) => {
      e.preventDefault();
      const carNames = this.$carNamesInput.value;
      fn(carNames);
    });
  }
}

export default RacingCarView;
