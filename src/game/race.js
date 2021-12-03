import generateRandomNumber from './utils/generateRandomNumber.js';
import isMovable from './utils/isMovable.js';

function race(cars) {
  cars.forEach((car) => {
    const randomNum = generateRandomNumber();
    if (isMovable(randomNum)) car.move();
  });
}

export default race;
