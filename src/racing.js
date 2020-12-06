import { Car } from "./carInstance";

export const makeRacingCars = cars => {
  let racingCars = [];
  cars.split(",").forEach(name => racingCars.push(new Car(name, 0)));
  console.log(racingCars);
};
