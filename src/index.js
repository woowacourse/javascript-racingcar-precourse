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

  getCountInput = () => {
    const countInput = document.getElementById("racing-count-input");
    const counts = countInput.value;
    console.log(counts);
    return counts;
  };

  handleCarNameSubmit = () => {
    const carNameButton = document.getElementById("car-names-submit");
    carNameButton.addEventListener("click", () => {
      this.getCarNameInput();
    });
  };

  handleCountSubmit = () => {
    const countButton = document.getElementById("racting-count-submit");
    countButton.addEventListener("click", () => {
      this.getCountInput();
    });
  };
}

new RacingCarGame();
