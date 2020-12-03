import checkInputValid from './inputvalid.js';
import {carInf, $carNameInput, $timesInput} from './utils.js';
import {
  showCounterElement,
  showResultElement,
} from '../elements/showElement.js';

export const onSubmitCarName = (e) => {
  if (!checkInputValid(e.target, $carNameInput.value)) {
    return ($carNameInput.value = '');
  }
  carInf.car.getPlayingCarList($carNameInput.value);
  showCounterElement();

  return e.target.removeEventListener('click', onSubmitCarName);
};

export const onSubmitRacingTimes = (e) => {
  if (!checkInputValid(e.target, $timesInput.value)) {
    return ($timesInput.value = '');
  }
  carInf.car.gamePlay($timesInput.value);
  showResultElement();

  return e.target.removeEventListener('click', onSubmitRacingTimes);
};
