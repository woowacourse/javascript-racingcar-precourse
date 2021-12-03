import { hideElement, showElement } from '../utils/setAttribute.js';

const $racingResultTitle = document.querySelector('#racing-result-title');

export function hideCountInputAndResult() {
  const $racingCountTitle = document.querySelector('#racing-count-title');
  const $racingCountForm = document.querySelector('#racing-count-form');

  hideElement($racingCountTitle);
  hideElement($racingCountForm);
  hideElement($racingResultTitle);
}

export function showCountInput() {
  const $racingCountTitle = document.querySelector('#racing-count-title');
  const $racingCountForm = document.querySelector('#racing-count-form');

  showElement($racingCountTitle);
  showElement($racingCountForm);
}

export function showResultSrceen() {
  showElement($racingResultTitle);
}
