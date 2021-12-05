import { isValidRacingCount } from "./checkRacingCount.js";
import { getValueById } from "../../utils/getElementThings.js";

import { alertForRacingCount } from "../../views/racingCount/alertForRacingCount.js";
import {
  resetRacingCountInput,
  lockRacingCountInput,
} from "../../views/racingCount/racingCountInput.js";

class RacingCount {
  constructor() {
    this.racingCount = 0;
    this.$racingCountSubmit = document.getElementById("racing-count-submit");
    this.addEventHandlers();
  }

  addEventHandlers() {
    this.onClickRacingCountSubmit();
  }

  onClickRacingCountSubmit() {
    this.$racingCountSubmit.addEventListener("click", e => {
      e.preventDefault();
      const racingCountStr = getValueById("racing-count-input");

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
