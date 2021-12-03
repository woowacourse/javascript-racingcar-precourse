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
  }

  configureInputProperties() {
    this.carList;
    this.raceNumber;
  }

  onClickCarNamesSubmit = (event) => {
    event.preventDefault();
    const carList = this.$carNamesInput.value.split(',');
    if (ValidateUtils.carNamesText(carList)) {
      this.carList = carList;
    }
  };
}

new RacingCarGame();
