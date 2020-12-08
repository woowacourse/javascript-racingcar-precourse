import racingCountValidator from '../utils/racingCountValidator.js';

export default function inputRacingCount($element, setRacingCount) {
  const $racingCountInput = $element.querySelector('#racing-count-input');
  const $racingCountSubmitBtn = $element.querySelector('#racing-count-submit');

  const onHandleRacingCountSubmit = () => {
    const racingCount = $racingCountInput.value;
    if (racingCountValidator(racingCount)) {
      setRacingCount(racingCount);
    }
  };

  $racingCountSubmitBtn.addEventListener('click', onHandleRacingCountSubmit);
}
