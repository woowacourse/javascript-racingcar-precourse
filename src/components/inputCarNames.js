import carNameValidator from '../utils/validators/carNameValidator.js';
import { showRacingCountInputContainer } from '../utils/showTags.js';
import inputRacingCount from './inputRacingCount.js';
import Car from '../Car.js';

export default function inputCarNames($element) {
  const $carNameInput = $element.querySelector('#car-names-input');
  const $carNameSubmitBtn = $element.querySelector('#car-names-submit');

  const onHandleCarNameSubmit = () => {
    const carNames = $carNameInput.value !== '' ? $carNameInput.value.split(',') : null;
    if (carNameValidator(carNames)) {
      const racingCars = carNames.map((value) => new Car(value));
      showRacingCountInputContainer();
      inputRacingCount($element, racingCars);
    }
  };

  $carNameSubmitBtn.addEventListener('click', onHandleCarNameSubmit);
}
