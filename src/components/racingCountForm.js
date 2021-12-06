import { isValidRacingCount } from '../utils/validation.js';
import { initInput } from '../utils/utils.js';
import { ERROR_MESSAGE } from '../constants/errorMessage.js';

export default function RacingCountForm(setCount, racing) {
  this.title = document.getElementById('racing-count-title');
  this.input = document.getElementById('racing-count-input');
  this.submitButton = document.getElementById('racing-count-submit');

  this.show = () => {
    this.title.classList.remove('hide');
    this.input.classList.remove('hide');
    this.submitButton.classList.remove('hide');
  };

  this.hide = () => {
    this.title.classList.add('hide');
    this.input.classList.add('hide');
    this.submitButton.classList.add('hide');
  };

  const getRacingCountNumber = () => {
    const racingCount = this.input.value;
    const racingCountNumber = Number(racingCount);

    return racingCountNumber;
  };

  const onClickSubmitButton = (event) => {
    event.preventDefault();
    const racingCount = getRacingCountNumber();

    if (!isValidRacingCount(racingCount)) {
      alert(`${ERROR_MESSAGE.RACING_COUNT}`);
      initInput(this.input);
      return;
    }

    setCount(racingCount);
    racing();
  };

  const setEvent = () => {
    this.submitButton.addEventListener('click', onClickSubmitButton);
  };

  setEvent();
}
