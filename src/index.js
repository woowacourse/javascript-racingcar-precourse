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
  }

  configureInputProperties() {
    this.carList;
    this.raceNumber;
  }
}
