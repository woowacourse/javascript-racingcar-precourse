export default class RacingCarModel {
  constructor(cars) {
    this._cars = cars;
  }

  progress() {
    const progressedCars = this._cars.map(car => {
      car.moveForward();
    });

    this._cars = progressedCars;
  }
}
