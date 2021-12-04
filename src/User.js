export default class User {
  constructor() {
    this.carNames = document.getElementById("car-names-input");
    this.rancingCount = document.getElementById("racing-count-input");
  }

  getCarNames() {
    return this.carNames.value;
  }

  getRacingCount() {
    return this.rancingCount.value;
  }
}
