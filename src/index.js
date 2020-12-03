import CarFactory from "./domain/carfacotory.js";

export default class RacingCarGame {
  constructor() {
    const _carNamesSubmitElement = document.querySelector("#car-names-submit");

    _carNamesSubmitElement.addEventListener("click", () => { new CarFactory() });
  }
}


new RacingCarGame();
