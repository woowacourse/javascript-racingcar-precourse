import { isValidCount } from "../utils/validations.js";

export class RacingCountInput {
  constructor({ setCount }) {
    this.initializeDOM();
    this.initializeEvents();
    this.setCount = setCount;
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

    if (!isValidCount(count)) {
      return;
    }
    setCount(count);
  }

  getRacingCount() {
    let racingCount = this.racingCountInput.value;

    this.checkRacingCountError(racingCount);
  }
}
