import $ from '../utils/dom.js';
import { disableCountInput } from '../views/disableInput.js';
import alertInputError from '../views/alertInputError.js';
import { resetCountInput } from '../views/resetInput.js';
import playGame from './playGame.js';
import { COUNT, ERROR } from '../utils/constants.js';

const isValidCountInput = countInput => {
  if (countInput === '') {
    alertInputError(ERROR.INPUT_BLANK);
    return false;
  }
  if (Number(countInput) < COUNT.MIN_NUM) {
    alertInputError(ERROR.UNDER_MIN_NUM);
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
  resetCountInput();
};

export default handleRacingCountInput;
