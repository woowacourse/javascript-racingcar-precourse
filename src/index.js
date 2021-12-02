import stringToArrayConverter from './stringToArrayConverter.js';
import isValidCarNames from './isValidCarNames.js';

export default class CarRacingGame {
  constructor() {
    this.carNames = [];
    this.racingCount = 0;
    this.addCarNamesSubmitEvent();
  }

  addCarNamesSubmitEvent() {
    const $carNamesInput = document.getElementById('car-names-input');
    const $carNamesSubmit = document.getElementById('car-names-submit');
    $carNamesSubmit.addEventListener('click', (event) => {
      event.preventDefault();

      const carNamesString = $carNamesInput.value;
      if (!isValidCarNames(carNamesString)) {
        alert('자동차 이름을 5자 이하로 콤마로 구분하여 입력해주세요.');
        return;
      }
      this.carNames = stringToArrayConverter(carNamesString);
    });
  }
}

const car = new CarRacingGame();
