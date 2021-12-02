import Car from "./car.js";

class RacingCar {
  constructor(name) {
    this.car = new Car(name);
    this.location = 0;
  }

  goForward() {
    this.location++;
  }

  getCar() {
    return this.car;
  }

  getLocation() {
    return this.location;
  }
}

export default RacingCar;
