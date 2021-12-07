import { $carNameSubmit, $racingCountSubmit, $racingCountInput, $racingCountText, $resultText } from "./constants/constants.js";
import { createCars } from "./modules/submitCarNames.js";

export default class RacingCarGame {
  constructor() {
    this.initDOM();
    this.initEventListener();
  }

  initDOM() {
    $racingCountText.style.display = "none";
    $racingCountSubmit.style.display = "none";
    $racingCountInput.style.display = "none";
    $resultText.style.display = "none";
  }

  initEventListener() {
    $carNameSubmit.addEventListener('click', (e) => {
      e.preventDefault();
      const Cars = createCars();
    });

    $racingCountSubmit.addEventListener('click', (e) => {
      e.preventDefault();
    });
  }
}

new RacingCarGame();