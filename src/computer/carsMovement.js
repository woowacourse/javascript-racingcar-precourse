import getRandomNumber from './numberGenerator.js';

function isMoved() {
  const randomNumber = getRandomNumber();

  if (randomNumber >= 4) {
    return true;
  }
  return false;
}

function getCarsMovement(cars) {
  const carsMovement = [];

  cars.forEach(car => {
    if (isMoved()) {
      carsMovement.push(true);
    } else {
      carsMovement.push(false);
    }
  });
  return carsMovement;
}

export default function moveCars(cars, racingCount) {
  let i = 0;
  for (i; i < racingCount; i += 1) {
    const carsMovement = getCarsMovement(cars);
    console.log(carsMovement);
  }
}
