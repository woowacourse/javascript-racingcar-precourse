import { racingCountInput } from './elements.js';

import { checkRacingCountInputValid } from './InputValidation.js';

export default function onRacingCountSubmit(event) {
  event.preventDefault();
  const racingCount = racingCountInput.value;
  const racingCountInputValid = checkRacingCountInputValid(racingCount);
  console.log(racingCountInputValid);
}
