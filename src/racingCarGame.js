import {
  hideRacingCountContainer,
  hideResultContainer,
} from "./util/hide-and-show.js";
import CarsHandler from "./components/carsHandler.js";
import Game from "./components/game.js";
import RacingCountHandler from "./components/racingCountHandler.js";

export default class RacingCarGame {
  constructor() {
    this.createComponents();
  }

  init = () => {
    this.carsHandler.init();
    this.racingCountHandler.init();
    hideRacingCountContainer();
    hideResultContainer();
  };

  createComponents = () => {
    this.carsHandler = new CarsHandler();
    this.game = new Game();
    this.racingCountHandler = new RacingCountHandler(
      this.carsHandler,
      this.game
    );
  };
}
