import { WRONG_COUNT_MESSAGE } from '../constants/index.js';
import { isInt } from '../utils/index.js';

export default function RacingCountContainer({ setRacingCount }) {
  this.racingCountContainer = document.querySelector('.racing-count-container');
  this.racingCountInput = document.getElementById('racing-count-input');
  this.racingCountSubmitButton = document.getElementById('racing-count-submit');

  this.handleClickRacingCountSubmitButton = () => {
    const input = this.racingCountInput.value;
    if (!this.isValidRacingCount(input)) {
      return alert(WRONG_COUNT_MESSAGE);
    }
    setRacingCount(Number(input));
  };

  this.isValidRacingCount = input => {
    if (input === '' || input === '0' || !isInt(input) || input < 0) {
      return false;
    }

    return true;
  };

  this.show = () => {
    this.racingCountContainer.classList.remove('hide');
  };

  this.racingCountSubmitButton.addEventListener(
    'click',
    this.handleClickRacingCountSubmitButton
  );
}
