import { STEP } from "./sharedVariable.js";

export default class RacingCarGame {
  constructor() {

  }

  updateInputFromHtml(gameStep, inputValue) {
    switch (gameStep) {
      case STEP.NAME_INPUT:
        this.processNameInput(inputValue);
        break;
      case STEP.RACING_COUNT:
        console.log(inputValue, "RACING_COUNT_STEP");
        break;
      default:
        console.log(inputValue, "오류");
    }
  }

  processNameInput(){
  }
}
