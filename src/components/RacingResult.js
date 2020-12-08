import Car from "./Car.js";

export default class RacingResult {
  constructor({ $target, carNames, racingCount }) {
    this.$container = document.createElement("div");
    $target.append(this.$container);

    this.carNames = carNames;
    this.racingCount = racingCount;
    this.cars = [];
  }

  createCars = () => {
    const cars = [];

    for (let i = 0; i < this.carNames.length; i++) {
      cars.push(
        new Car({
          carName: this.carNames[i],
          racingCount: this.racingCount,
        })
      );
    }

    return cars;
  };

  setState = ({ nextCarNames, nextRacingCount }) => {
    this.carNames = nextCarNames;
    this.racingCount = nextRacingCount;
    this.cars = this.createCars();

    this.render();
  };

  createRacingResultHTMLString = (car, round) => {
    return `<li>${car.carName}: ${car.isMovePerRound
      .slice(0, round)
      .map((isMove) => (isMove ? "-" : ""))
      .join("")} </li>`;
  };

  createHTMLStringPerRound = (round) => {
    return `<ul>${this.cars.map((car) => this.createRacingResultHTMLString(car, round)).join("")}</ul>`;
  };

  render = () => {
    const HTMLStringPerRound = [];

    for (let i = 0; i < this.racingCount; i++) {
      HTMLStringPerRound.push(this.createHTMLStringPerRound(i + 1));
    }

    this.$container.innerHTML = "";
    this.$container.insertAdjacentHTML("beforeend", `<h4>📄 실행 결과</h4>${HTMLStringPerRound.join("")}`);
  };
}
