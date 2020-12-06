export default class RacingCarGame {
  constructor() {
    this.carNameInputField = document.getElementById("car-names-input");
    this.carNameSubmitButton = document.getElementById("car-names-submit");

    this.racingCountInputField = document.getElementById("racing-count-input");
    this.racingCountSubmitButton = document.getElementById("racing-count-submit");
    this.racingCountContainer = document.getElementById("racing-count-container");

    this.gameResultContainer = document.getElementById("game-result-container");
  }

  getCarNamesInput() {
    const carNamesInput = this.carNameInputField.value;
    return carNamesInput;
  }

  parseCarNames(carNamesInput) {
    const carNamesString = carNamesInput.replace(/ /g, ""); // 공백제거
    const carNames = carNamesString.split(",");
    return carNames;
  }
}

new RacingCarGame();
