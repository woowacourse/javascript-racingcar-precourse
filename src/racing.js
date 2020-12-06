import { Car } from "./carInstance";

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
    console.log(resultMessage);
  };

  const init = () => {
    carNames.split(",").forEach(name => racingCars.push(new Car(name)));
    race();
  };

  init();
}
