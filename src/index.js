import CarFactory from "./domain/carfacotory.js";
import { ElementControl } from "./view/element.js";

export default class RacingCarGame {
  constructor() {
    ElementControl.hideCarGameCountContainer();
    ElementControl.hideCarGameResultContainer();

    this.clickCarNameSubmitBtn();
  }

  clickCarNameSubmitBtn() {
    const _carNamesSubmitElement = document.querySelector("#car-names-submit");

    _carNamesSubmitElement.addEventListener("click", () => { this.runGame() });
  }

  runGame() {
    const _carFactory = new CarFactory();
    const _carArray = _carFactory.getCarArray();

    if (_carArray.length !== 0) {
      ElementControl.showCarGameCountContainer(); 
      console.log(_carArray);
    }

  }

}

new RacingCarGame();
