import Car from '../car.js';
import { WRONG_CARNAME_MESSAGE } from '../constants/index.js';

export default function CarNamesContainer({ setCars }) {
  this.carNamesInput = document.getElementById('car-names-input');
  this.carNamesSubmitButton = document.getElementById('car-names-submit');
  this.racingCountContainer = document.querySelector('.racing-count-container');

  this.handleClickCarNamesSubmitButton = () => {
    const carNamesList = this.carNamesInput.value.split(',');
    if (!this.isValidCarNames(carNamesList)) {
      return alert(WRONG_CARNAME_MESSAGE);
    }

    const newCars = carNamesList.map(carName => new Car(carName));
    setCars(newCars);
  };

  this.isValidCarNames = carNames => {
    for (const carName of carNames) {
      if (carName.length > 5 || carName.trim().length === 0) {
        return false;
      }
    }

    return true;
  };

  this.carNamesSubmitButton.addEventListener(
    'click',
    this.handleClickCarNamesSubmitButton
  );
}
