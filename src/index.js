import { $carNameSubmit, $racingCountSubmit } from "./constants/constants.js";
import { parseCarName, createCars } from "./modules/submitCarNames.js";
import { initDOM, showNextDOM } from "./modules/showDOM.js";
import { checkInput } from "./modules/submitCountTrun.js";
import { warning } from "./modules/validCarName.js";
import playGame from "./modules/playGame.js";

export default class RacingCarGame {
  constructor() {
    initDOM();
    this.initEventListener();
  }

  initEventListener() {
    $carNameSubmit.addEventListener('click', (e) => {
      e.preventDefault();
      if(warning(parseCarName())) {
        showNextDOM();
      }
    });

    $racingCountSubmit.addEventListener('click', (e) => {
      e.preventDefault();
      const cars = createCars();
      new playGame(cars,checkInput());
    });
  }
}

new RacingCarGame();