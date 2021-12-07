import Car from "./Car.js";
import isMovable from "../utils/isMovable.js";
import makeResultElement from "../utils/makeResultElement.js";

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
    this.display();
  }

  move(index) {
    if (isMovable()) {
      this.array[index].moveForward();
    }
  }

  game(racingCountInput) {
    makeResultElement();
    for (let i = 0; i < racingCountInput; i++) {
      this.race();
    }
  }

  display() {
    const racingWinners = document.getElementById("racing-winners");
    let resultText = "";
    for (let i = 0; i < this.array.length; i++) {
      resultText +=
        "\n" + this.array[i].getName() + ": " + this.array[i].displayDistance();
    }

    racingWinners.innerText += resultText + "\n";
  }
}

export default CarList;
