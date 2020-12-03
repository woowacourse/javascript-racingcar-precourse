import {
  hideCounterElement,
  hideResultElement,
} from '../elements/hideElement.js';
import {carInf, $carNameInput, $timesInput} from './utils.js';
import RacingCarGame from '../class/RacingCarGame.js';

export default function initGame() {
  hideCounterElement();
  hideResultElement();
  inputReset();
  carInf.car = new RacingCarGame();
}

const inputReset = () => {
  $carNameInput.value = '';
  $timesInput.value = '';
};
