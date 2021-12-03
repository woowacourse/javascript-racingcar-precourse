import { hideElement, showElement } from '../utils/setAttribute.js';

export function hideCountInputAndResult() {
  const $racingCountTitle = document.querySelector('#racing-count-title');
  const $racingCountForm = document.querySelector('#racing-count-form');
  const $racingResultTitle = document.querySelector('#racing-result-title');

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
