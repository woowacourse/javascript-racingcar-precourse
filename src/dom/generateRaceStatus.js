import generateCarStatus from './generateCarStatus.js';

function generateRaceStatus(cars) {
  return cars.map((car) => generateCarStatus(car.getName(), car.getPosition()));
}

export default generateRaceStatus;
