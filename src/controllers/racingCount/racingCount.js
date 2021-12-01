import { isValidRacingCount } from "./checkRacingCount.js";
import { alertForRacingCount } from "../../views/racingCount/alertForRacingCount.js";
import { resetRacingCountInput } from "../../views/racingCount/resetRacingCountInput.js";

export default class RacingCount {
  constructor() {
    this.racingCount = 0;
    this.$racingCountInput = document.getElementById("racing-count-input");
    this.$racingCountSubmitButton = document.getElementById("racing-count-submit");
    this.addEventHandlers();
  }

  addEventHandlers() {
    this.onClickRacingCountSubmitButton();
  }

  onClickRacingCountSubmitButton() {
    this.$racingCountSubmitButton.addEventListener("click", e => {
      e.preventDefault();

      const racingCountStr = this.$racingCountInput.value;

      if (isValidRacingCount(racingCountStr)) {
        this.setRacingCount(racingCountStr);
        // 결과 계산
      } else {
        alertForRacingCount();
        resetRacingCountInput();
      }
    });
  }

  setRacingCount(racingCountStr) {
    const racingCount = parseInt(racingCountStr, 10);

    this.racingCount = racingCount;
  }
}
