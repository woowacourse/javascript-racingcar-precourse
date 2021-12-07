import { $carNameSubmit, $racingCountSubmit } from "./constants/constants.js";
import { initDOM, showNextDOM } from "./modules/showDOM.js";
import { parseCarName, createCars } from "./modules/submitCarNames.js";
import { warning } from "./modules/validCarName.js";

export default class RacingCarGame {
  constructor() {
    initDOM();
    this.initEventListener();
  }

  initEventListener() {
    $carNameSubmit.addEventListener('click', (e) => {
      e.preventDefault();
      if(warning(parseCarName())) {
        const Cars = createCars();
        showNextDOM();
      }
    });

    $racingCountSubmit.addEventListener('click', (e) => {
      e.preventDefault();
    });
  }
}

new RacingCarGame();