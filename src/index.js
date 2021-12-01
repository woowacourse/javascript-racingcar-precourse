import Cars from "./controllers/cars/cars.js";
import { isValidRacingCount } from "./controllers/racingCount/checkRacingCount.js";
import RacingCount from "./controllers/racingCount/racingCount.js";
import Winners from "./controllers/racingResult/winners.js";
import VisiblePartOfRacingCount from "./views/racingCount/visiblePartOfRacingCount.js";
import { showWinners } from "./views/racingResult/showWinners.js";
import VisiblePartOfRacingResult from "./views/racingResult/visiblePartOfRacingResult.js";

export default class CarRacingGame {
  constructor() {
    this.cars = new Cars();
    this.racingCount = new RacingCount();
    this.partOfRacingCount = new VisiblePartOfRacingCount();
    this.partOfRacingResult = new VisiblePartOfRacingResult();
    this.$racingCountSubmitButton = document.getElementById("racing-count-submit");
  }

  init() {
    this.partOfRacingCount.hide();
    this.partOfRacingResult.hide();
    this.addEventHandlers();
  }

  addEventHandlers() {
    this.onClickRacingCountSubmitButton();
  }

  onClickRacingCountSubmitButton() {
    this.$racingCountSubmitButton.addEventListener("click", () => {
      if (isValidRacingCount(this.racingCount.getRacingCount())) {
        const winners = new Winners(this.cars.getCars(), this.racingCount.getRacingCount()).getWinners();

        showWinners(winners);
      }
    });
  }
}

new CarRacingGame().init();
