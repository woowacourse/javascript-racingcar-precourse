import getRandomNumber from './numberGenerator.js';
import printRacing from './printRacing.js';

function isMoved() {
  const randomNumber = getRandomNumber();

  if (randomNumber >= 4) {
    return true;
  }
  return false;
}

function carsMovement(cars) {
  cars.forEach(car => {
    if (isMoved()) {
      car.count += 1;
    }
  });
}

export default function moveCars(cars, racingCount) {
  let i = 0;
  for (i; i < racingCount; i += 1) {
    carsMovement(cars);
    printRacing(cars);
  }
}
