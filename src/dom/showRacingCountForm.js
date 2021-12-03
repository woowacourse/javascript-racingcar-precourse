import { DISPLAY } from '../constants.js';

export default function showRacingCount() {
  const $racingCountInput = document.getElementById('racing-count-input');
  const $racingCountForm = $racingCountInput.parentElement;
  $racingCountForm.style.display = DISPLAY.block;

  const $racingCountHeader = document.getElementsByTagName('h4')[0];
  $racingCountHeader.style.display = DISPLAY.block;
}
