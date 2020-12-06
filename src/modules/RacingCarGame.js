import Car from "./Car.js";
import { getRandomNumber } from "./Utils.js";

export default class RacingCarGame {
  constructor(carNames, racingCount) {
    this.gameResultContainer = document.querySelector("#car-game-result");
    this.carNames = carNames;
    this.racingCount = racingCount;
    this.racingCars = [];
    this.MIN_RANDOM_NUMBER = 0;
    this.MAX_RANDOM_NUMBER = 9;
    this.ADD_STEP_STANDARD = 4;
  }

  setRacingCars = () => {
    this.carNames.forEach(carName => {
      const car = new Car(carName);
      this.racingCars.push(car);
    });
  };

  updateCarStep = car => {
    const randomNumber = getRandomNumber(
      this.MIN_RANDOM_NUMBER,
      this.MAX_RANDOM_NUMBER
    );

    if (randomNumber >= this.ADD_STEP_STANDARD) {
      car.move();
    }
  };

  getMaxStep = () => {
    const allSteps = this.racingCars.map(car => car.getStep());
    const maxStep = Math.max.apply(null, allSteps);

    return maxStep;
  };

  getWinners = () => {
    const maxStep = this.getMaxStep();
    const winners = this.racingCars.filter(car => car.getStep() === maxStep);

    return winners;
  };

  printRacingResult = (racingResult, car) => {
    const carStatus = car.getCarStatus();
    racingResult.innerHTML += carStatus;
  };

  printWinner = () => {
    const winners = this.getWinners();
    const winnersName = [];

    winners.forEach(winner => {
      winnersName.push(winner.getName());
    });

    this.gameResultContainer.innerHTML += `<p>
      최종 우승자: ${winnersName.join(", ")}
    </p>`;
  };

  checkRacingResult = () => {
    this.gameResultContainer.innerHTML = "<h4>📄 실행 결과</h4>";

    while (this.racingCount > 0) {
      const racingResult = document.createElement("div");
      racingResult.classList.add("racing-result");

      this.racingCars.forEach(car => {
        this.updateCarStep(car);
        this.printRacingResult(racingResult, car);
      });

      this.gameResultContainer.appendChild(racingResult);
      this.racingCount--;
    }
  };

  play = () => {
    this.setRacingCars();
    this.checkRacingResult();
    this.printWinner();
  };
}
