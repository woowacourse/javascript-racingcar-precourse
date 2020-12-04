import { DEFAULT_POSITION, EMPTY_ARRAY } from "./constants.js";

export default class Winner {
  constructor(carsList) {
    this._carsList = carsList;
  }

  getMaxDistance() {
    let maxDistance = DEFAULT_POSITION;

    this._carsList.forEach(
      car => (maxDistance = Math.max(maxDistance, car.position))
    );

    return maxDistance;
  }

  getWinners() {
    const winners = EMPTY_ARRAY;
    const maxDistance = this.getMaxDistance();

    this._carsList.forEach(car =>
      car.position === maxDistance ? winners.push(car.name) : null
    );

    return winners;
  }
}
