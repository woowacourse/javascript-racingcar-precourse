import { WINNER_COMMENT } from '../utils/constant.js';
import { hideElement, showElement } from '../utils/dom.js';

class RacingGameView {
  constructor() {
    this.$racingCountSubmitButton = document.querySelector('#racing-count-submit');
    this.$racingCountInput = document.querySelector('#racing-count-input');
    this.$carNamesInput = document.querySelector('#car-names-input');
    this.$carNamesSubmitButton = document.querySelector('#car-names-submit');
    this.$app = document.querySelector('#app');
    this.$racingCountForm = document.querySelector('#racing-count-form');
    this.$racingResultHeading = document.querySelector('#racing-result-heading');
    this.$racingCountHeading = document.querySelector('#racing-count-heading');

    this.$resultTextDiv = document.createElement('div');
    this.$winnerTextDiv = document.createElement('div');
    this.$winnerTextSpan = document.createElement('span');
    this.$winnerTextSpan.setAttribute('id', 'racing-winners');
    this.resetElements();
  }

  resetElements() {
    this.appendElements();
    this.hideElements();
  }

  appendElements() {
    this.$winnerTextDiv.innerText = WINNER_COMMENT;
    this.$app.appendChild(this.$resultTextDiv);
    this.$app.appendChild(this.$winnerTextDiv);
    this.$winnerTextDiv.appendChild(this.$winnerTextSpan);
  }

  hideElements() {
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

export default RacingGameView;
