import { isValidRacingCount } from '../utils/validation.js';
import { initInput } from '../utils/utils.js';
import { ERROR_MESSAGE } from '../constants/errorMessage.js';

export default function RacingCountForm(setCount, racing) {
  const title = document.getElementById('racing-count-title');
  const input = document.getElementById('racing-count-input');
  const submitButton = document.getElementById('racing-count-submit');

  this.show = () => {
    title.classList.remove('hide');
    input.classList.remove('hide');
    submitButton.classList.remove('hide');
  };

  this.hide = () => {
    title.classList.add('hide');
    input.classList.add('hide');
    submitButton.classList.add('hide');
  };

  const getRacingCountNumber = () => {
    const racingCount = input.value;
    const racingCountNumber = Number(racingCount);

    return racingCountNumber;
  };

  const onClickSubmitButton = (event) => {
    event.preventDefault();
    const racingCount = getRacingCountNumber();

    if (!isValidRacingCount(racingCount)) {
      alert(`${ERROR_MESSAGE.RACING_COUNT}`);
      initInput(input);
      return;
    }

    setCount(racingCount);
    racing();
  };

  const setEvent = () => {
    submitButton.addEventListener('click', onClickSubmitButton);
  };

  setEvent();
}
