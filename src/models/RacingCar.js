import Car from "./Car.js";

class RacingCar {
  constructor(name) {
    this.car = new Car(name);
    this.location = 0;
  }

  goFoward() {
    this.location += 1;
  }

  getCarName() {
    return this.car.name;
  }

  getLocation() {
    return this.location;
  }
}

export default RacingCar;
