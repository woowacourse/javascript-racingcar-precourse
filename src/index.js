import Cars from "./controllers/cars/cars.js";
import RacingCount from "./controllers/racingCount/racingCount.js";
import Winners from "./controllers/racingResult/winners.js";
import { playGame } from "./controllers/play/playGame.js";
import { isValidRacingCount } from "./controllers/racingCount/checkRacingCount.js";

import { showWinners } from "./views/racingResult/showWinners.js";
import VisiblePartOfRacingCount from "./views/racingCount/visiblePartOfRacingCount.js";
import VisiblePartOfRacingResult from "./views/racingResult/visiblePartOfRacingResult.js";

class CarRacingGame {
  constructor() {
    this.cars = new Cars();
    this.racingCount = new RacingCount();
    this.partOfRacingCount = new VisiblePartOfRacingCount();
    this.partOfRacingResult = new VisiblePartOfRacingResult();
    this.$racingCountSubmit = document.getElementById("racing-count-submit");
  }

  init() {
    this.partOfRacingCount.hide();
    this.partOfRacingResult.hide();
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

new CarRacingGame().init();
