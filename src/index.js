import CarFactory from "./domain/carfacotory.js";
import { Element, ElementControl } from "./view/element.js";

export default class RacingCarGame {
  constructor() {
    ElementControl.hideCarGameCountContainer();
    ElementControl.hideCarGameResultContainer();

    this.clickCarNameSubmitBtn();
  }

  clickCarNameSubmitBtn() {
    const _carNamesSubmitElement = Element.carNamesSubmit;

    _carNamesSubmitElement.addEventListener("click", () => {
      this.handleCarNameInput()
    });
  }

  clickRacingCountSubmitBtn() {
    const _racingCountSubmitElement = Element.racingCountSubmit;

    _racingCountSubmitElement.addEventListener("click", () => {
      this.handleRacingCountInput()
    });

  }

  handleCarNameInput() {
    const _carFactory = new CarFactory();
    this.carArray = _carFactory.getCarArray();

    if (this.carArray.length !== 0) {
      ElementControl.showCarGameCountContainer();

      this.clickRacingCountSubmitBtn();
    }
  }

  handleRacingCountInput() {
    
  }

}

new RacingCarGame();
