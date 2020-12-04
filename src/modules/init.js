import {
  hideCounterElement,
  hideResultElement,
} from '../elements/hideElement.js';
import {carClass, $carNameInput, $countInput} from './utils.js';
import RacingCarGame from '../index.js';

const inputReset = () => {
  $carNameInput.value = '';
  $countInput.value = '';
};

export default function initGame() {
  hideCounterElement();
  hideResultElement();
  inputReset();
  carClass.car = new RacingCarGame();
}
