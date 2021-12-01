import { playGame } from "../play/playGame.js";
import { sortByLocation } from "./sortCars.js";

export default class Winners {
  constructor(cars, racingCount) {
    this.cars = cars;
    this.racingCount = racingCount;
    this.winners = [];
    this.pickWinners();
  }

  pickWinners() {
    const carsSortedLocation = sortByLocation(playGame(this.cars, this.racingCount));

    const maxLocation = carsSortedLocation[0].location;

    for (let i = 0; i < carsSortedLocation.length; i++) {
      if (carsSortedLocation[i].location < maxLocation) {
        break;
      }
      this.winners.push(carsSortedLocation[i].car.getCarName());
    }
  }

  getWinners() {
    return this.winners;
  }
}
