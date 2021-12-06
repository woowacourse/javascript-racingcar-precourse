import { checkEmpty, checkNamelength, checkNegative } from './check.js';
import { INPUT_ERROR_MESSAGE, NEGATIVE_NUM_ERROR_MESSAGE } from './constant.js';

export default class RacingcarGame {
  constructor() {
    this.getInput();
    this.onCarSubmit();
    this.onNumSubmit();
  }

  getInput() {
    this.$carListInput = document.getElementById('car-names-input');
    this.$raceCountInput = document.getElementById('racing-count-input');
  }

  onCarSubmit() {
    const $carListSubmit = document.getElementById('car-names-submit');
    $carListSubmit.addEventListener('click', this.getCarList.bind(this));
  }

  onNumSubmit() {
    const $raceCountSubmit = document.getElementById('racing-count-submit');
    $raceCountSubmit.addEventListener('click', this.getRaceCount.bind(this));
  }

  getCarList(e) {
    e.preventDefault();
    const carList = this.$carListInput.value.split(',');
    const valid = true;
    if (!checkNamelength(carList, valid) || !checkEmpty(carList, valid)) {
      alert(INPUT_ERROR_MESSAGE);
      this.$carListInput.value = '';
    }
  }

  getRaceCount(e) {
    e.preventDefault();
    const raceCount = this.$raceCountInput.value;
    if (!checkNegative(raceCount)) {
      this.$raceCountInput.value = '';
      alert(NEGATIVE_NUM_ERROR_MESSAGE);
    }
  }
}

new RacingcarGame();
