import { CarNamesInput } from "./carNamesInput.js";
import { RacingCountInput } from "./RacingCountInput.js";
import { setVisibility } from "../utils/handleDom.js";
import { GameResult } from "./GameResult.js";

export class PlayRacingGame {
  constructor() {
    this.cars = [];
    this.count = 0;

    this.initializeDOM();
    this.render();
  }

  initializeDOM = () => {
    this.racingCountContainer = document.getElementById(
      "racing-count-container"
    );
    this.resultContainer = document.getElementById("result-container");
  };

  setCars = (newCars) => {
    this.cars = newCars;
    setVisibility(this.racingCountContainer, "visible");
  };

  runRaces = (count) => {
    this.count = count;
    this.racing(this.cars, this.count);
    setVisibility(this.resultContainer, "visible");
  };

  render = () => {
    new CarNamesInput({ setCars: this.setCars });
    new RacingCountInput({ runRaces: this.runRaces });
    this.gameResultContainer = new GameResult();
  };

  racing = (cars, count) => {
    for (let i = 0; i < count; i++) {
      this.racingInRound(cars);
      this.gameResultContainer.updateResultPerRound(cars);
    }
    const winners = this.getWinners(cars);
    this.gameResultContainer.updateResultHTMLWithWinners(winners);
  };

  racingInRound = (cars) => {
    cars.forEach((car) => {
      car.race();
    });
  };

  getWinners = (cars) => {
    let maxDistance = Math.max(...cars.map((car) => car.distance));

    return cars
      .filter((car) => car.distance === maxDistance)
      .map((car) => car.name);
  };
}
