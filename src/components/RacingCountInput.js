import { isValidCount } from "../utils/validations.js";

export class RacingCountInput {
  constructor({ runRaces }) {
    this.initializeDOM();
    this.initializeEvents();
    this.runRaces = runRaces;
  }

  initializeDOM = () => {
    this.racingCountInput = document.getElementById("racing-count-input");
    this.racingCountSubmit = document.getElementById("racing-count-submit");
  };

  initializeEvents = () => {
    this.racingCountSubmit.addEventListener("click", () => {
      this.handleRacingCountInput();
    });

    this.racingCountSubmit.addEventListener("keyup", (event) => {
      if (event.keyCode === 13) {
        this.handleRacingCountInput();
      }
    });
  };

  handleRacingCountInput = () => {
    const count = this.getRacingCount();

    if (!isValidCount(count)) {
      return;
    }
    console.log(count);
    this.runRaces(count);
  };

  getRacingCount = () => {
    return this.racingCountInput.value;
  };
}
