import RacingCarGame from "./controller/racing-game-controller.js"
import { Element, ElementControl } from "./view/element.js";

export default class App {
  constructor() {
    ElementControl.hideCarGameCountContainer();
    ElementControl.hideCarGameResultContainer();

    this.setEventListener();
  }

  setEventListener() {
    const _racingCarGame = new RacingCarGame();
    const _carNamesSubmitElement = Element.carNamesSubmit;
    const _racingCountSubmitElement = Element.racingCountSubmit;

    _carNamesSubmitElement.addEventListener("click", () => {
      _racingCarGame.handleCarNameInput()
    });

    _racingCountSubmitElement.addEventListener("click", () => {
      _racingCarGame.handleRacingCountInput()
    });
  }
}

new App();
