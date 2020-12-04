import {
  hideCounterElement,
  hideResultElement,
} from '../elements/hideElement.js';
import {carInf, $carNameInput, $countInput} from './utils.js';
import RacingCarGame from '../index.js';

const inputReset = () => {
  $carNameInput.value = '';
  $countInput.value = '';
};

export default function initGame() {
  hideCounterElement();
  hideResultElement();
  inputReset();
  carInf.car = new RacingCarGame();
}
