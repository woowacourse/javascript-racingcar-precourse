import InputsControl from "../classes/checkUserInputs.js";

import {
  settingGame,
  showContainer,
  disableInputs,
  renderResult,
} from "../config/manipulateContainers.js";

export default class RacingCarGame {
  constructor() {
    settingGame();
    this.$carNamesInput = document.getElementById("car-names-input");
    this.$carNamesSubmit = document.getElementById("car-names-submit");
    this.$racingCountContainer = document.getElementById(
      "racing-count-container"
    );
    this.$racingCountInput = document.getElementById("racing-count-input");
    this.$racingCountSubmit = document.getElementById("racing-count-submit");
    this.$resultContainer = document.getElementById("result-container");
    this.cars = [];
    this.racingCount = null;
    this.totalDist = 0;
  }

  async _getResult() {
    const winCars = this.cars
      .filter((car) => car.isWin(this.totalDist, this.racingCount))
      .map((car) => car.name);
    await renderResult(
      this.$resultContainer,
      this.cars,
      this.racingCount,
      winCars
    );
    await showContainer(this.$resultContainer);
  }

  async _moveCars(turn) {
    await this.cars.forEach((car) => {
      car.play();
      this.totalDist = Math.max(car.pos[turn - 1], this.totalDist);
    });
  }

  async _play() {
    for (let turn = 1; turn <= this.racingCount; turn++)
      await this._moveCars(turn);
    await this._getResult();
  }

  _checkRacingCountInput(racingCountInputData) {
    const {
      goToNextStep,
      inputData,
    } = racingCountInputData.getResultOfRacingCountNumber(
      this.$racingCountInput
    );

    if (goToNextStep) {
      disableInputs(this.$racingCountInput, this.$racingCountSubmit);
      this.racingCount = inputData;
      return this._play();
    }
    return (this.$racingCountInput.value = "");
  }

  _userInputRacingCount() {
    this.$racingCountSubmit.addEventListener("click", () =>
      this._checkRacingCountInput(
        new InputsControl(this.$racingCountInput.value)
      )
    );
  }

  _submitCarNamesInput(carNames) {
    showContainer(this.$racingCountContainer);
    this.cars = carNames;
    return this._userInputRacingCount();
  }

  _checkCarNamesInput(carNamesInputData) {
    const {
      goToNextStep,
      inputData,
    } = carNamesInputData.getResultOfCarNamesInput(this.$carNamesInput);

    if (goToNextStep) {
      disableInputs(this.$carNamesInput, this.$carNamesSubmit);
      return this._submitCarNamesInput(inputData);
    }
    return (this.$carNamesInput.value = "");
  }

  _userInputCarNames() {
    this.$carNamesSubmit.addEventListener("click", () =>
      this._checkCarNamesInput(new InputsControl(this.$carNamesInput.value))
    );
  }

  startGame() {
    this._userInputCarNames();
  }
}
