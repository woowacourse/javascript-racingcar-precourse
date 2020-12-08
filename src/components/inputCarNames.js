import carNameValidator from '../utils/carNameValidator.js';
import Car from '../Car.js';

export default function inputCarNames($element, setCars) {
  const $carNameInput = $element.querySelector('#car-names-input');
  const $carNameSubmitBtn = $element.querySelector('#car-names-submit');

  const onHandleCarNameSubmit = () => {
    const carNames = $carNameInput.value !== '' ? $carNameInput.value.split(',') : null;
    if (carNameValidator(carNames)) {
      setCars(carNames.map((value) => new Car(value)));
    }
  };

  $carNameSubmitBtn.addEventListener('click', onHandleCarNameSubmit);
}
