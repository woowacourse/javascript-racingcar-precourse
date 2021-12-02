import stringToArrayConverter from './stringToArrayConverter.js';
import isValidCarNames from './isValidCarNames.js';
import isValidRacingCount from './isValidRacingCount.js';

export default class CarRacingGame {
  constructor() {
    this.carNames = [];
    this.racingCount = 0;
    this.addCarNamesSubmitEvent();
    this.addRacingCountSubmitEvent();
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

  addRacingCountSubmitEvent() {
    const $racingCountInput = document.getElementById('racing-count-input');
    const $racingCountSubmit = document.getElementById('racing-count-submit');
    $racingCountSubmit.addEventListener('click', (event) => {
      event.preventDefault();

      if (!isValidRacingCount($racingCountInput.value)) {
        return alert('0이 아닌 숫자를 입력해주세요.');
      }
      if (!this.isValidCarNames()) {
        return alert('자동차 이름을 입력해주세요.');
      }
      this.racingCount = Number($racingCountInput.value);
    });
  }

  isValidCarNames() {
    if (this.carNames.length === 0) {
      return false;
    }
    return true;
  }
}

const car = new CarRacingGame();
