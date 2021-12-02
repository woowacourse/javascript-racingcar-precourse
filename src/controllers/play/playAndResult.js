import Winners from "../racingResult/winners.js";
import { playGame } from "../play/playGame.js";
import { isValidRacingCount } from "../racingCount/checkRacingCount.js";

import { showWinners } from "../../views/racingResult/showWinners.js";

class PlayAndResult {
  constructor(cars, racingCount) {
    this.cars = cars;
    this.racingCount = racingCount;
    this.$racingCountSubmit = document.getElementById("racing-count-submit");
    this.addEventHandlers();
  }

  addEventHandlers() {
    this.onClickRacingCountSubmit();
  }

  onClickRacingCountSubmit() {
    this.$racingCountSubmit.addEventListener("click", () => {
      const cars = this.cars.getCars();
      const racingCount = this.racingCount.getRacingCount();

      if (isValidRacingCount(cars)) {
        const result = playGame(cars, racingCount);
        const winners = new Winners(result).getWinners();

        showWinners(winners);
      }
    });
  }
}

export default PlayAndResult;
