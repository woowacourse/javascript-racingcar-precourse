export default class RacingcarGame {
  constructor() {
    this.getInput();
    this.onSubmit();
  }

  getInput() {
    this.$carListInput = document.getElementById('car-names-input');
    this.$raceCount = document.getElementById('racing-count-input');
  }

  onSubmit() {
    const $carListSubmit = document.getElementById('car-names-submit');
    const $raceCountSubmit = document.getElementById('racing-count-submit');
    $carListSubmit.addEventListener('click', this.getCarList.bind(this));
  }

  getCarList(e) {
    e.preventDefault();
    const carList = this.$carListInput.value.split(',');
    console.log(carList);
  }
}

new RacingcarGame();
