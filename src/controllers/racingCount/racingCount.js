import { isValidRacingCount } from "./checkRacingCount.js";

import { alertForRacingCount } from "../../views/racingCount/alertForRacingCount.js";
import {
  resetRacingCountInput,
  lockRacingCountInput,
} from "../../views/racingCount/racingCountInput.js";

class RacingCount {
  constructor() {
    this.racingCount = 0;
    this.$racingCountInput = document.getElementById("racing-count-input");
    this.$racingCountSubmit = document.getElementById("racing-count-submit");
    this.addEventHandlers();
  }

  addEventHandlers() {
    this.onClickRacingCountSubmit();
  }

  onClickRacingCountSubmit() {
    this.$racingCountSubmit.addEventListener("click", e => {
      e.preventDefault();
      const racingCountStr = this.$racingCountInput.value;

      if (isValidRacingCount(racingCountStr)) {
        this.setRacingCount(racingCountStr);
        lockRacingCountInput();
      } else {
        alertForRacingCount();
        resetRacingCountInput();
      }
    });
  }

  getRacingCount() {
    return this.racingCount;
  }

  setRacingCount(racingCountStr) {
    const racingCount = parseInt(racingCountStr, 10);

    this.racingCount = racingCount;
  }
}

export default RacingCount;
