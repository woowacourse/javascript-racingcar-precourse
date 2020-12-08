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

  getRacingRecord(countInput) {
    const racingRecord = [];
    for (let i = 0; i < countInput; i++) {
      racingRecord.push(this.moveForwordAll());
    }

    return racingRecord;
  }

  getRacingStatusBars(record) {
    return record.map((_status) => {
      let statusBar = "";
      for (let i = 0; i < _status; i++) {
        statusBar += "-";
      }

      return statusBar;
    });
  }

  getResultComponent(record) {
    const racingStatusBars = this.getRacingStatusBars(record);
    const resultContainer = document.createElement("div");
    resultContainer.style.marginBottom = "25px";
    for (let i = 0; i < racingStatusBars.length; i++) {
      resultContainer.innerHTML += `
        ${this.cars[i].name}: ${racingStatusBars[i]}
        <br />
      `;
    }

    return resultContainer;
  }

  getWinners() {
    const winners = [];
    const finalMoveStateArray = this.cars.map((_car) => {
      return _car.movedDistance;
    });
    let maxDistance = Math.max.apply(null, finalMoveStateArray);
    if (maxDistance === 0) {
      maxDistance = -1; // 모든 차량의 이동거리가 0일 경우 우승자 없음
    }
    this.cars.forEach((_car) => {
      if (_car.movedDistance === maxDistance) {
        winners.push(_car.name);
      }
    });

    return winners;
  }

  stringifyListElements(list) {
    let resultString = "";
    list.forEach((_elem, i) => {
      if (i !== 0) {
        resultString += ", ";
      }
      resultString += _elem;
    });

    return resultString;
  }

  getWinnersString() {
    const winners = this.getWinners();
    let resultString = "";
    if (winners.length) {
      resultString = this.stringifyListElements(winners);
    } else {
      resultString = "우승자가 없습니다.";
    }

    return resultString;
  }

  renderResultHTML(container, countInput) {
    this.getRacingRecord(countInput).forEach((_record) => {
      container.append(this.getResultComponent(_record));
    });
    container.append(`최종 우승자: ${this.getWinnersString()}`);
  }
}
