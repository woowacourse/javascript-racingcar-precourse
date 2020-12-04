import { displayContainer } from "./util.js";
import { handleCarNameSubmit, handleCountSubmit } from "./handler.js";

export default class RacingCarGame {
  constructor() {
    handleCarNameSubmit();
    handleCountSubmit();
    this.initDisplay();
  }

  initDisplay = () => {
    const countContainer = document.getElementById("car-game-count-container");
    const resultContainer = document.getElementById(
      "car-game-result-container"
    );

    displayContainer(countContainer, false);
    displayContainer(resultContainer, false);
  };
}

new RacingCarGame();
