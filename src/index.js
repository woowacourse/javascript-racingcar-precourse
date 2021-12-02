import Cars from "./controllers/cars/cars.js";
import RacingCount from "./controllers/racingCount/racingCount.js";
import PlayAndResult from "./controllers/play/playAndResult.js";

import VisiblePartOfRacingCount from "./views/racingCount/visiblePartOfRacingCount.js";
import VisiblePartOfRacingResult from "./views/racingResult/visiblePartOfRacingResult.js";

class CarRacingGame {
  constructor() {
    this.playAndResult = new PlayAndResult(new Cars(), new RacingCount());
    this.partOfRacingCount = new VisiblePartOfRacingCount();
    this.partOfRacingResult = new VisiblePartOfRacingResult();
  }

  init() {
    this.partOfRacingCount.hide();
    this.partOfRacingResult.hide();
  }
}

new CarRacingGame().init();
