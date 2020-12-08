import racingCountValidator from '../utils/racingCountValidator.js';
import RacingCarGame from '../RacingCarGame.js';

export default function ($element, racingCars) {
  const $racingCountInput = $element.querySelector('#racing-count-input');
  const $racingCountSubmitBtn = $element.querySelector('#racing-count-submit');

  const onHandleRacingCountSubmit = () => {
    const racingCount = $racingCountInput.value;
    if (racingCountValidator(racingCount)) {
      new RacingCarGame(racingCars, racingCount);
    }
  };

  $racingCountSubmitBtn.addEventListener('click', onHandleRacingCountSubmit);
}
