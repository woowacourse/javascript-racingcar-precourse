import Car from '../car.js';
import { isValidCarName } from '../utils/validation.js';
import { initInput } from '../utils/utils.js';

export default function CarNamesForm(setCars) {
  const input = document.getElementById('car-names-input');
  const submitButton = document.getElementById('car-names-submit');

  const getCarNames = () => {
    const carNames = input.value;
    const carNameList = carNames.split(',').map((carName) => carName.trim());

    return carNameList;
  };

  const onClickSubmitButton = (event) => {
    event.preventDefault();
    const carNameList = getCarNames();

    if (!isValidCarName(carNameList).isValid) {
      alert(isValidCarName(carNameList).errorMessage);
      initInput(input);
      return;
    }

    const racingCars = carNameList.map((carName) => new Car(carName));
    setCars(racingCars);
  };

  const setEvent = () => {
    submitButton.addEventListener('click', onClickSubmitButton);
  };

  setEvent();
}
