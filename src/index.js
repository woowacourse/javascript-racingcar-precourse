import RacingCarGame from "./controller/racing-game-controller.js";
import { Element, ElementControl } from "./view/element.js";

export default class App {
  constructor() {
    ElementControl.hideCarGameCountContainer();
    ElementControl.hideCarGameResultContainer();

    this.setEventListener();
  }

  setEventListener() {
    const racingCarGame = new RacingCarGame();
    const carNamesSubmitElement = Element.carNamesSubmit;
    const racingCountSubmitElement = Element.racingCountSubmit;

    carNamesSubmitElement.addEventListener("click", () => {
      racingCarGame.handleCarNameInput();
    });

    racingCountSubmitElement.addEventListener("click", () => {
      racingCarGame.handleRacingCountInput();
    });
  }
}

new App();
