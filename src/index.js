import CarFactory from "./domain/carfacotory.js";

export default class RacingCarGame {
  constructor() {
    this.clickCarNameSubmitBtn();
  }

  clickCarNameSubmitBtn() {
    const _carNamesSubmitElement = document.querySelector("#car-names-submit");

    _carNamesSubmitElement.addEventListener("click", () => { this.runGame() });
  }

  runGame() {
    const _carFactory = new CarFactory();
    const _carNameArray = _carFactory.getCarNameArray();
  }

}

new RacingCarGame();
