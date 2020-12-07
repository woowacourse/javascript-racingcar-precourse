import { getRandomNumber } from "../utils/random.js";
import { NUMBER as NUM } from "../constants/constants.js";
import { CarNamesInput } from "./carNamesInput.js";
import { RacingCountInput } from "./RacingCountInput.js";
import { setVisibility } from "../utils/handleDom.js";
import { GameResult } from "../compotents/GameResult.js";

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

  setCount = (count) => {
    this.count = count;
    this.racing(this.cars, this.count);
  };

  render = () => {
    new CarNamesInput({ setCars: this.setCars });
    new RacingCountInput({ setCount: this.setCount });
    new GameResult();
  };

  racing = (cars, count) => {
    let result = "";

    for (let i = 0; i < count; i++) {
      this.racingInRound(cars);
      console.log(cars);
      result = result + this.getResultString(cars) + "</br>";
    }

    setVisibility(this.resultContainer, "visible");
    // resultContainer.append(document.createTextNode(result));
  };

  racingInRound = (cars) => {
    cars.forEach((car) => {
      getRandomNumber(NUM.RANDOM_START, NUM.RANDOM_END) >=
      NUM.GO_FORWARD_CONDITION
        ? car.go()
        : car.stop();
    });
  };
}
