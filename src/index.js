// export default function RacingCarGame() {
// }

import Car from "./Car";

export default class RacingCarGame {
  constructor() {
    this.initContainer();
    this.initEvent();
    this.cars = [];
  }

  initContainer() {
    this.racingCountContainer = document.getElementById("racing-count-container");
    this.racingResultContainer = document.getElementById("racing-count-container");
    this.carGameContainer = document.getElementById("car-game-container");

    this.carNamesInput = document.getElementById("car-names-input");
    this.racingCountInput = document.getElementById("racing-count-input");

    this.racingCountContainer.style.display = none;
    this.racingResultContainer.style.display = none;
  }

  initEvent() {
    this.carGameContainer.addEventListener("click", e => {
      switch (e.target.id) {
        case "car-names-submit":
          this._carSubmitEvent();
          break;
        case "racing-count-submit":
          if (this._validateCount(this.racingCountInput.value)) {
          } else {
            this._showErrorAlert("숫자만 입력 가능합니다.");
            this._initValueAndFoucsIn("count");
          }
          break;
        default:
          break;
      }
    });
  }

  _carSubmitEvent() {
    const carNames = this.carNamesInput.value;
    if (this._validateCarNames(carNames)) {
      this._makeCars(carNames);
      this.racingCountContainer.style.display = "block";
    } else {
      this._showErrorAlert("자동차 이름 입력이 잘못되었습니다.");
      this._initValueAndFoucsIn("names");
    }
  }

  _makeCars(names) {
    const nameArr = names.split(",");
    for (let name of nameArr) {
      const car = new Car(name);
      this.cars.push(car);
    }
  }

  _validateCarNames(input) {
    const stringArr = input.split(",");
    const unvalidatedStringArr = stringArr.filter(str => {
      const trimedStr = str.trim();
      return trimedStr.length > 5;
    });
    return unvalidatedStringArr.length > 0 ? false : true;
  }

  _validateCount(count) {
    return Number(count) === NaN ? false : true;
  }

  _showErrorAlert(str) {
    alert(str);
  }

  _initValueAndFoucsIn(elementName) {
    if (elementName === "names") {
      this.carNamesInput.focus();
      this.carNamesInput.value = "";
    } else if ((elementName = "count")) {
      this.racingCountInput.focus();
      this.racingCountInput.value = "";
    }
  }
}

new RacingCarGame();
