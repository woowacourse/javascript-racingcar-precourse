import Race from './race.js';
import ValidateUtils from './validateUtils.js';

class RacingCarGame {
  constructor() {
    this.configureElementProperties();
    this.configureInputProperties();
  }

  configureElementProperties() {
    this.$app = document.querySelector('#app');
    this.$carNamesInput = document.querySelector('#car-names-input');
    this.$carNamesSubmit = document.querySelector('#car-names-submit');
    this.$racingCountInput = document.querySelector('#racing-count-input');
    this.$racingCountSubmit = document.querySelector('#racing-count-submit');
    this.$resultHeader = document.querySelector('#result-header');

    this.$carNamesSubmit.addEventListener('click', this.onClickCarNamesSubmit);
    this.$racingCountSubmit.addEventListener('click', this.onClickNumberSubmit);
  }

  configureInputProperties() {
    this.carList;
    this.raceNumber;
  }

  onClickCarNamesSubmit = (event) => {
    event.preventDefault();
    const carList = this.$carNamesInput.value.split(',');
    if (ValidateUtils.checkCarNames(carList)) {
      this.carList = carList;
    }
  };

  onClickNumberSubmit = (event) => {
    event.preventDefault();
    const raceNumber = Number(this.$racingCountInput.value);
    if (ValidateUtils.checkNumberAndCarNames(raceNumber, this.carList)) {
      this.raceNumber = raceNumber;
      this.play();
    }
  };

  /**
   * Race인스턴트의 starGame으로 게임 시작
   * 반환 받은 Element를 $app태그에 추가
   */
  play() {
    const race = new Race(this.carList, this.raceNumber);
    const $result = race.startGame();
    this.$app.appendChild($result);
  }
}

new RacingCarGame();
