import { showResult, appendBr, showWinners } from "../view/showResult.js";

class Car {
  constructor(name) {
    this.name = name;
    this.currentCount = 0;
  }

  go() {
    if (MissionUtils.Random.pickNumberInRange(1, 10) >= 4) {
      this.currentCount++;
    }
  }

  showRunning() {
    let courrentLine = "";
    for (let i = 0; i < this.currentCount; i++) {
      courrentLine += "-";
    }

    return courrentLine;
  }
}

export default function racingCars(carNames, runTime) {
  const Cars = carNames.map((name) => new Car(name));
  let time = runTime;

  while (time--) {
    Cars.map((car) => {
      car.go();
      showResult(car);
    });
    appendBr();
  }
  showWinners(Cars);
}
