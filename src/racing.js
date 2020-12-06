import { Car } from "./carInstance";

export default function racing(carNames, racingCount) {
  let racingCars = [];

  const race = () => {
    for (let i = 0; i < racingCount; i++) {
      racingCars.forEach(car => {
        car.move();
      });
    }
    console.log(racingCars);
  };

  const init = () => {
    carNames.split(",").forEach(name => racingCars.push(new Car(name, 0)));
    race();
  };

  init();
}
