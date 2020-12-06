// export default function RacingCarGame() {
// }

import Car from "./Car.js";

export default class RacingCarGame {
  constructor() {
    this.initContainer();
    this.initEvent();
    this.cars = [];
  }

  initContainer() {
    this.racingCountContainer = document.getElementsByClassName("racing-count-container")[0];
    this.racingResultContainer = document.getElementsByClassName("racing-result-container")[0];
    this.carGameContainer = document.getElementsByClassName("car-game-container")[0];

    this.carNamesInput = document.getElementById("car-names-input");
    this.racingCountInput = document.getElementById("racing-count-input");

    this.racingCountContainer.style.display = "none";
    this.racingResultContainer.style.display = "none";
  }

  initEvent() {
    this.carGameContainer.addEventListener("click", e => {
      if (e.target.id === "car-names-submit") {
        this._carSubmitEvent();
      } else if (e.target.id === "racing-count-submit") {
        this._countSubmitEvent();
      }
    });
  }

  _getEachRoundInfo(count) {
    const arr = [];
    for (let index = 0; index < count; index++) {
      const curInfo = [];
      for (let car of this.cars) {
        const info = car.move().getCarInfo();
        curInfo.push(info);
      }
      arr.push(curInfo);
    }
    return arr;
  }

  _getEachRacingResult(arr) {
    let resultHtml = "";
    for (let racingInfo of arr) {
      let str = "";
      for (let { name, distance } of racingInfo) {
        str += `<div>${name}: ${"-".repeat(distance)}</div>`;
      }
      resultHtml += `<p>${str}</p>`;
    }
    return resultHtml;
  }

  _getWinners(racingInfo) {
    const distancArr = racingInfo.map(info => Number(info.distance));
    const longestDist = Math.max(...distancArr);
    const winnerList = [];
    for (let { name, distance } of racingInfo) {
      if (distance === longestDist) {
        winnerList.push(name);
      }
    }
    return winnerList.join(", ");
  }

  _countSubmitEvent() {
    const count = Number(this.racingCountInput.value);
    const eachRoudRacingInfo = this._getEachRoundInfo(count);
    let resultHtml = this._getEachRacingResult(eachRoudRacingInfo);

    const lastRacingInfo = eachRoudRacingInfo[eachRoudRacingInfo.length - 1];
    const winners = this._getWinners(lastRacingInfo);

    resultHtml += `<div>${winners}</div>`;

    const template = document.createElement("template");
    template.innerHTML = resultHtml;
    this.racingResultContainer.appendChild(template.content);
    this.racingResultContainer.style.display = "block";
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
