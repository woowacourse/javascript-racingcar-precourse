import { Car } from "./carInstance";
import { provideResult, provideWinner } from "./provider";
import { getMostMovedCount } from "./util";

export default function racing(carNames, racingCount) {
  let racingCars = [];
  let resultMessage = "";

  const race = () => {
    for (let i = 0; i < racingCount; i++) {
      racingCars.forEach(car => {
        car.move();
        resultMessage += car.getProgress();
      });
      resultMessage += `<br>`;
    }
    provideResult(resultMessage);
    getWinner();
  };

  const getWinner = () => {
    const maxCount = getMostMovedCount(racingCars);
    const winners = racingCars
      .filter(car => car.progress.length === maxCount)
      .map(car => car.name);
    provideWinner(winners);
  };

  const init = () => {
    carNames.split(",").forEach(name => racingCars.push(new Car(name)));
    race();
  };

  init();
}
