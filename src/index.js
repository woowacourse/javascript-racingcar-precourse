export default class RacingcarGame {
  constructor() {
    this.getInput();
    this.onSubmit();
  }

  getInput() {
    this.$carListInput = document.getElementById('car-names-input');
    this.$raceCountInput = document.getElementById('racing-count-input');
  }

  onSubmit() {
    const $carListSubmit = document.getElementById('car-names-submit');
    const $raceCountSubmit = document.getElementById('racing-count-submit');
    $carListSubmit.addEventListener('click', this.getCarList.bind(this));
    $raceCountSubmit.addEventListener('click', this.getRaceCount.bind(this));
  }

  getCarList(e) {
    e.preventDefault();
    const carList = this.$carListInput.value.split(',');
    return carList;
  }

  getRaceCount(e) {
    e.preventDefault();
    const raceCount = this.$raceCountInput.value;
    return raceCount;
  }
}

new RacingcarGame();
