import { showWinners } from './elementControl.js';

const random = () => {
  return Math.floor(Math.random() * 10);
};

const findMaxDistance = cars => {
  const maxValue = Math.max.apply(
    cars,
    cars.map(car => {
      return car.distance;
    })
  );
  return maxValue;
};

const findSameValue = (cars, maxDistance) => {
  let winners = [];
  for (let car of cars) {
    if (car.distance === maxDistance) {
      winners.push(car.name);
    }
  }
  return winners;
};

export const findWinner = cars => {
  const maxDistance = findMaxDistance(cars);
  const winners = findSameValue(cars, maxDistance);
  showWinners(winners);
};

export const stopOrGo = car => {
  const randomValue = random();
  if (randomValue >= 4) {
    car.move();
  }
};
