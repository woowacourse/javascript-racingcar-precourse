import { hideElement } from '../utils/setAttribute.js';

export default function hideScreen() {
  const $racingCountTitle = document.querySelector('#racing-count-title');
  const $racingCountForm = document.querySelector('#racing-count-form');
  const $racingResultTitle = document.querySelector('#racing-result-title');

  hideElement($racingCountTitle);
  hideElement($racingCountForm);
  hideElement($racingResultTitle);
}
