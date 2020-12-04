import checkInputValid from './inputvalid.js';
import {carClass, $carNameInput, $countInput} from './utils.js';
import {
  showCounterElement,
  showResultElement,
} from '../elements/showElement.js';

export const onSubmitCarName = (e) => {
  if (!checkInputValid(e.target, $carNameInput.value)) {
    return ($carNameInput.value = '');
  }
  carClass.car.getPlayingCarList($carNameInput.value);
  showCounterElement();

  return e.target.removeEventListener('click', onSubmitCarName);
};

export const onSubmitRacingCount = (e) => {
  if (!checkInputValid(e.target, $countInput.value)) {
    return ($countInput.value = '');
  }
  carClass.car.gamePlay($countInput.value);
  showResultElement();

  return e.target.removeEventListener('click', onSubmitRacingCount);
};
