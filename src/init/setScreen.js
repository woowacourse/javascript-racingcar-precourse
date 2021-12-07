import { hideElement, showElement } from '../utils/setAttribute.js';

const $racingCountTitle = document.querySelector('#racing-count-title');
const $racingCountForm = document.querySelector('#racing-count-form');
const $racingResultTitle = document.querySelector('#racing-result-title');

export function hideCountInputAndResult() {
  hideElement($racingCountTitle);
  hideElement($racingCountForm);
  hideElement($racingResultTitle);
}

export function showCountInput() {
  showElement($racingCountTitle);
  showElement($racingCountForm);
}

export function showResultTitle() {
  showElement($racingResultTitle);
}
