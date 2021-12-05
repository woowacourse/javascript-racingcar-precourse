import $ from '../utils/dom.js';
import disableCountInput from '../views/disableCountInput.js';
import startGame from './startGame.js';
import alertCountInputError from '../views/alertCountInputError.js';
import resetCountInput from '../views/resetCountInput.js';

const isValidCountInput = countInput => {
  if (countInput === '' || Number(countInput) < 1) {
    return false;
  }
  return true;
};

const handleRacingCountInput = () => {
  const countInput = $('#racing-count-input').value;
  if (isValidCountInput(countInput)) {
    startGame(Number(countInput));
    disableCountInput();
    return;
  }
  alertCountInputError(countInput);
  resetCountInput();
};

export default handleRacingCountInput;
