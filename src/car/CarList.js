import Car from "./Car.js";

class CarList {
  constructor() {
    this.array = [];
  }

  push(item) {
    this.array.push(item);
  }

  init(carNameArray) {
    for (let i = 0; i < carNameArray.length; i++) {
      this.push(new Car(carNameArray[i]));
    }
  }

  race() {
    for (let i = 0; i < this.array.length; i++) {
      this.move(i);
    }
  }

  move(index) {
    if (isMovable()) {
      this.array[index].moveForward();
    }
  }

  game(racingCountInput) {
    for (let i = 0; i < racingCountInput; i++) {
      this.race();
    }
  }
}

export default CarList;
