import RacingCar from "../../models/racingCar.js";

const makeRacingCars = nameStr => {
  const nameArr = nameStr.split(",");
  const racingCars = [];

  nameArr.forEach(name => {
    racingCars.push(new RacingCar(name));
  });

  return racingCars;
};

export { makeRacingCars };
