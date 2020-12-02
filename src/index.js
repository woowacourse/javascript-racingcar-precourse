export default class RacingCarGame {
  constructor() {
    this.handleCarNameSubmit();
  }

  handleCarNameSubmit = () => {
    const carNameButton = document.getElementById("car-names-submit");
    carNameButton.addEventListener("click", () => {
      this.getCarNameInput();
    });
  };
}

new RacingCarGame();
