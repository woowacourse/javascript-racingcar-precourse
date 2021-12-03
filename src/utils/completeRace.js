import printResult from '../dom/printResult.js';

function findWinners(carArray) {
  let winners = [];

  let maxDistance = 0;
  carArray.forEach((car) => {
    if (car.distance === maxDistance) {
      winners.push(car.name);
    }
    if (car.distance > maxDistance) {
      winners = [car.name];
      maxDistance = car.distance;
    }
  });
  return winners;
}

export default function completeRace(carArray) {
  const winners = findWinners(carArray);
  printResult(winners);
}
