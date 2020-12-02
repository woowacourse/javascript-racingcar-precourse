export default class RacingCarGame {
  constructor() {
    this.handleCarNameSubmit();
    this.handleCountSubmit();
  }

  getCarNameInput = () => {
    const carNameInput = document.getElementById("car-names-input");
    const carNameValue = carNameInput.value;
    const carNames = carNameValue.split(",");

    return carNames;
  };

  handleCarNameSubmit = () => {
    const carNameButton = document.getElementById("car-names-submit");
    carNameButton.addEventListener("click", () => {
      this.getCarNameInput();
    });
  };
}

new RacingCarGame();
