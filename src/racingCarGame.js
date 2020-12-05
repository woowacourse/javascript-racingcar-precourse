import { STEP } from "./sharedVariable.js";
import Car from "./car.js";

export default class RacingCarGame {
  constructor() {
    this.initRacingGame();
  }

  initRacingGame() {
    this.carsInRacing = [];
  }

  updateInputFromHtml(gameStep, inputValue) {
    switch (gameStep) {
      case STEP.NAME_INPUT:
        this.processNameInput(inputValue);
        break;
      case STEP.RACING_COUNT:
        this.processRacingCount(inputValue);
        break;
      default:
        console.log(inputValue, "오류");
    }
  }
  processNameInput(carNameArray) {
    carNameArray.forEach((carName) => {
      this.carsInRacing.push(new Car(carName));
    });
  }
  processRacingCount(racingCount) {
  }
}
