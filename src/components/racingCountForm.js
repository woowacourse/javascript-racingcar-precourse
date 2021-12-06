import { isValidRacingCount } from '../utils/validation.js';
import { initInput } from '../utils/utils.js';
import { ERROR_MESSAGE } from '../constants/errorMessage.js';

export default function RacingCountForm(setCount, racing) {
  const input = document.getElementById('racing-count-input');
  const submitButton = document.getElementById('racing-count-submit');

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
