import { DISPLAY } from './constants.js';

function hideRacingCountForm() {
  const $racingCountInput = document.getElementById('racing-count-input');
  const $racingCountForm = $racingCountInput.parentElement;
  $racingCountForm.style.display = DISPLAY.none;
}

function hideHeaders() {
  const $headers = document.getElementsByTagName('h4');
  for (let i = 0; i < $headers.length; i++) {
    $headers[i].style.display = DISPLAY.none;
  }
}

export default function hideRacingCountAndResult() {
  hideRacingCountForm();
  hideHeaders();
}
