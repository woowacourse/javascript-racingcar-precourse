import { inputCarName } from './index.js';
import RacingGame from './RacingGame.js';

export default class InputRacingCount {
  constructor() {
    this.$racingCountInput = document.getElementById('racing-count-input');
    this.$racingCountSubmit = document.getElementById('racing-count-submit');
    this.racingCount = 0;

    this.addCountSubmitEvent();
  }

  checkHaveCarName() {
    if (inputCarName.carNames.length === 0) {
      this.$racingCountInput.value = '';
      this.racingCount = 0;

      return alert('자동차 이름을 먼저 입력해주세요!');
    }
    new RacingGame(inputCarName.carNames, this.racingCount);
  }

  checkNumberForm(inputCount) {
    if (inputCount === '' || Number.isNaN(inputCount)) {
      return false;
    }

    return true;
  }

  checkNumberSize(inputCount) {
    if (inputCount <= 0 || inputCount.indexOf('.') !== -1) {
      return false;
    }

    return true;
  }

  invalidCountAction() {
    this.$racingCountInput.value = '';
    this.racingCount = 0;

    return alert('유효하지 않은 입력입니다!');
  }

  isValidCount(inputCount) {
    if (
      !(this.checkNumberForm(inputCount) && this.checkNumberSize(inputCount))
    ) {
      this.invalidCountAction();
      return false;
    }

    return true;
  }

  addCountSubmitEvent() {
    this.$racingCountSubmit.addEventListener('click', (e) => {
      e.preventDefault();
      const inputCount = this.$racingCountInput.value;

      if (this.isValidCount(inputCount)) {
        this.racingCount = inputCount;
        this.checkHaveCarName();
      }
    });
  }
}
