import $ from '../utils/dom.js';
import { disableCountInput } from '../views/disableInput.js';
import { alertCountInputError } from '../views/alertInputError.js';
import { resetCountInput } from '../views/resetInput.js';
import playGame from './playGame.js';
import { COUNT } from '../utils/constants.js';

const isValidCountInput = countInput => {
  if (countInput === '' || Number(countInput) < COUNT.MIN_NUM) {
    return false;
  }
  return true;
};

const handleRacingCountInput = () => {
  const countInput = $('#racing-count-input').value;
  if (isValidCountInput(countInput)) {
    playGame(Number(countInput));
    disableCountInput();
    return;
  }
  alertCountInputError(countInput);
  resetCountInput();
};

export default handleRacingCountInput;
