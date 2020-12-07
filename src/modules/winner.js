import {createWinnerElement} from '../elements/createElement.js';

const pickWinner = (carEntry) => {
  const maxDistance = findMaxDistanceCar(carEntry);
  const winner = carEntry.filter((car) => car.distance.length === maxDistance);

  return winner;
};

const findMaxDistanceCar = (carEntry) => {
  const distanceSet = [];
  carEntry.forEach((car) => distanceSet.push(car.distance.length));

  return Math.max(...distanceSet);
};

export default function showWinner(carEntry) {
  const winnerCarsArray = pickWinner(carEntry);
  const winnerCarsNameArray = winnerCarsArray.map((car) => car.name);

  return createWinnerElement(winnerCarsNameArray);
}
