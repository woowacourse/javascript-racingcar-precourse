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
      car.step++;
    }
  };

  printRacingResult = (racingResult, car) => {
    const carStatus = car.getCarStatus();
    racingResult.innerHTML += carStatus;
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
  };
}
