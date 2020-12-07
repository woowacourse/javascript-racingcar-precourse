import { isValidCount } from "../utils/validations.js";

class RacingCountInput {
  constructor() {
    this.initializeDOM();
    this.initializeEvents();
  }

  initializeDOM() {
    this.racingCountInput = document.getElementById("racing-count-input");
    this.racingCountSubmit = document.getElementById("racing-count-submit");
  }

  initializeEvents() {
    racingCountSubmit.addEventListener("click", this.getRacingCount);
  }

  handleRacingCountInput() {
    const count = this.getRacingCount();

    if (isValidCount(count)) {
      return;
    }
    //TODOS : play racubg game
  }

  getRacingCount = () => {
    let racingCount = this.racingCountInput.value;

    this.checkRacingCountError(racingCount);
  };
}
