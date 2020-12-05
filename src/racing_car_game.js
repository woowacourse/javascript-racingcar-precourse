import Car from "./car.js";

export default class RacingCarGame {
  constructor() {
    this.cars = [];
  }

  // names : Array of stings
  setRacingCars(names) {
    names.forEach((_name) => {
      this.cars.push(new Car(_name));
    });
  }

  moveForwordAll() {
    return this.cars.map((_car) => {
      _car.moveForwordByRandom();
      return _car.movedDistance;
    });
  }
}
