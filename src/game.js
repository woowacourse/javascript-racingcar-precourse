import { displayContainer, generateRandomNumber } from "./util.js";
import { showWinner, showGameResult } from "./printer.js";

class Car {
  constructor(name) {
    this.name = name;
    this.move = 0;
  }
}

export default class Game {
  constructor() {
    this.cars = [];
    this.counts = 0;
  }

  checkCarNameVaild = (carNames) => {
    carNames.map((carName) => {
      if (carName.length === 0) {
        alert("주어진 자동차 이름중 공백인 이름이 있습니다");

        return false;
      } else if (carName.length > 5) {
        alert("주어진 자동차 이름중 5글자 초과인 이름이 있습니다");

        return false;
      } else if (carNames.indexOf(carName) !== carNames.lastIndexOf(carName)) {
        alert("주어진 자동차 이름중 중복된 이름이 존재합니다");

        return false;
      }
    });

    return true;
  };

  checkCountVaild = (counts) => {
    if (isNaN(counts)) {
      alert("입력한 횟수가 숫자가 아닙니다");

      return false;
    }

    if (counts <= 0) {
      alert("입력한 횟수가 올바른 값이 아닙니다");

      return false;
    }

    return true;
  };

  moveCar = () => {
    const generateNum = generateRandomNumber();

    if (generateNum >= 4) {
      return true;
    }

    return false;
  };

  // 주어진 cars 객체들 게임 한번 수행 메서드
  play = (cars) => {
    cars.forEach((car) => {
      if (this.moveCar()) {
        car.move += 1;
      }
    });

    showGameResult(this.cars);
  };

  // 자동차 경주 게임 수행 메서드
  startGame = () => {
    for (let i = 0; i < this.counts; i++) {
      this.play(this.cars);
    }
    showWinner(this.cars);
  };

  getCarNameInput = () => {
    const carNameInput = document.getElementById("car-names-input");
    const carNameValue = carNameInput.value;
    const carNames = carNameValue.split(",");

    carNames.forEach((carName) => {
      const car = new Car(carName);
      this.cars.push(car);
    });

    const countContainer = document.getElementById("car-game-count-container");
    displayContainer(countContainer, true);
  };

  getCountInput = () => {
    const countInput = document.getElementById("racing-count-input");
    const counts = countInput.value;
    this.counts = counts;

    const resultContainer = document.getElementById(
      "car-game-result-container"
    );
    displayContainer(resultContainer, true);

    this.startGame();
  };
}

export const { getCarNameInput, getCountInput } = new Game();
