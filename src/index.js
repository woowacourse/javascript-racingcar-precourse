import { $carNameSubmit, $racingCountSubmit, $racingCountInput, $racingCountText, $resultText } from "./constants/constants.js";
import Car from "./modules/Car.js";
import { parseCarName, createCars } from "./modules/submitCarNames.js";
import { warning } from "./modules/validCarName.js";

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
      if(warning(parseCarName())) {
        const Cars = createCars();
        console.log(Cars);
      }
    });

    $racingCountSubmit.addEventListener('click', (e) => {
      e.preventDefault();
    });
  }
}

new RacingCarGame();