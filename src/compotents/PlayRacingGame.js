import { getRandomNumber } from "./utils/random.js";
import { NUMBER as NUM } from "../constants/constants.js";
import { CarNamesInput } from "./carNamesInput.js";
import { RacingCountInput } from "./RacingCountInput.js";

export class PlayRacingGame {
  constructor() {
    this.cars = [];
    this.count = 0;

    this.playRacingGame();
  }

  playRacingGame() {
    new CarNamesInput();
    new RacingCountInput();

    //how to get cars and count from each class..?
    let result = this.racing(cars, count);

    new GameResult(result);
  }

  racing(cars, count) {
    let result = "";

    for (let i = 0; i < count; i++) {
      this.racingInRound(cars);
      result = result + this.getResultString(cars) + "</br>";
    }

    // setVisibility(this.resultContainer, "visible");
    // resultContainer.append(document.createTextNode(result));
  }

  racingInRound(cars) {
    cars.forEach((car) => {
      getRandomNumber(NUM.RANDOM_START, NUM.RANDOM_END) >=
      NUM.GO_FORWARD_CONDITION
        ? car.go()
        : car.stop();
    });
  }
}
