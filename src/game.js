import { countContainer, resultContainer } from "./container.js";

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

  checkCarNameVaild = names => {
    for (let i = 0; i < names.length; i++) {
      if (names[i].length === 0 || names[i].length > 5) {
        alert("주어진 자동차 이름중 공백이거나 5글자 초과인 이름이 있습니다");

        return false;
      } else if (names.indexOf(names[i]) !== names.lastIndexOf(names[i])) {
        alert("주어진 자동차 이름중 중복된 이름이 존재합니다");

        return false;
      }
    }

    return true;
  };

  checkCountVaild = () => {
    if (isNaN(this.counts)) {
      alert("입력한 횟수가 숫자가 아닙니다");

      return false;
    }

    if (this.counts <= 0) {
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
  play = cars => {
    cars.forEach(car => {
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
    const carNames = carNameInput.value.split(",");

    carNames.forEach(carName => {
      this.cars.push(new Car(carName));
    });

    if (this.checkCarNameVaild(carNames)) {
      displayContainer(countContainer, true);
    } else {
      this.cars = [];
    }
  };

  getCountInput = () => {
    const countInput = document.getElementById("racing-count-input");
    this.counts = countInput.value;

    if (this.checkCountVaild()) {
      displayContainer(resultContainer, true);
      this.startGame();
    }
  };
}

export const { getCarNameInput, getCountInput } = new Game();
