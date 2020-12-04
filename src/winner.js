import { DEFAULT_POSITION } from "./constants.js";

export default class Winner {
  constructor(cars) {
    this._cars = cars;
  }

  get cars() {
    return this._cars;
  }

  getMaxDistance() {
    let maxDistance = DEFAULT_POSITION;

    this._cars.forEach(
      car => (maxDistance = Math.max(maxDistance, car.position))
    );

    return maxDistance;
  }

  getWinners() {
    const winners = [];
    const maxDistance = this.getMaxDistance();

    this._cars.forEach(car =>
      car.position === maxDistance ? winners.push(car.name) : null
    );

    return winners;
  }
}
