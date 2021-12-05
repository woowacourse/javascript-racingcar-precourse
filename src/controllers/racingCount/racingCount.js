import { isValidRacingCount } from "./checkRacingCount.js";
import { getValueById } from "../../utils/getElementThings.js";

import { alertForRacingCount } from "../../views/racingCount/alertForRacingCount.js";
import { lockInputById, resetValueById } from "../../views/common/inputs.js";

class RacingCount {
  constructor() {
    this.racingCount = 0;
    this.inputId = "racing-count-input";
    this.$racingCountSubmit = document.getElementById("racing-count-submit");
    this.addEventHandlers();
  }

  addEventHandlers() {
    this.onClickRacingCountSubmit();
  }

  onClickRacingCountSubmit() {
    this.$racingCountSubmit.addEventListener("click", e => {
      e.preventDefault();
      const racingCountStr = getValueById(this.inputId);

      if (isValidRacingCount(racingCountStr)) {
        this.setRacingCount(racingCountStr);
        lockInputById(this.inputId);
      } else {
        alertForRacingCount();
        resetValueById(this.inputId);
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
