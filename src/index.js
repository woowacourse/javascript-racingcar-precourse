import { getCarsName, getTimes } from './input.js';

export default function RacingCarGame() {}

const namesSubmitButton = document.getElementById('car-names-submit');
const timesSubmitButton = document.getElementById('racing-count-submit');

if (namesSubmitButton) {
  namesSubmitButton.addEventListener('click', getCarsName);
}

if (timesSubmitButton) {
  timesSubmitButton.addEventListener('click', getTimes);
}

new RacingCarGame();
