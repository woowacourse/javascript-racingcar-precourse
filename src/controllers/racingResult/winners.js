import { sortByLocation } from "./sortCars.js";

export default class Winners {
  constructor(cars) {
    this.cars = cars;
    this.winners = [];
    this.pickWinners();
  }

  pickWinners() {
    const carsSortedLocation = sortByLocation(this.cars);

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
