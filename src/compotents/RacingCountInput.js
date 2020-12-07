import { isValidCount } from "../utils/validations.js";

export class RacingCountInput {
  constructor({ setCount }) {
    this.initializeDOM();
    this.initializeEvents();
    this.setCount = setCount;
  }

  initializeDOM = () => {
    this.racingCountInput = document.getElementById("racing-count-input");
    this.racingCountSubmit = document.getElementById("racing-count-submit");
  };

  initializeEvents = () => {
    this.racingCountSubmit.addEventListener(
      "click",
      this.handleRacingCountInput
    );
  };

  handleRacingCountInput = () => {
    const count = this.getRacingCount();

    if (!isValidCount(count)) {
      return;
    }
    this.setCount(count);
  };

  getRacingCount = () => {
    return this.racingCountInput.value;
  };
}
