import {
  hideCounterElement,
  hideResultElement,
} from '../elements/hideElement.js';
import {$carNameInput, $countInput} from './utils.js';

const inputReset = () => {
  $carNameInput.value = '';
  $countInput.value = '';
};

export default function initGame() {
  hideCounterElement();
  hideResultElement();
  inputReset();
}
