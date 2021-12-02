import Car from '../car/index.js';

const makeCarObjectList = carNamesList => {
  return carNamesList.map(x => new Car(x));
};

const moveCars = carObjectList => {};

const printCars = carObjectList => {};

export const playRacing = input => {
  const carObjectList = makeCarObjectList(input.carNamesList);
  let i;
  for (i = 0; i < input.racingCount; i += 1) {
    moveCars(carObjectList);
    printCars(carObjectList);
  }
};
