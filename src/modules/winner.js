import {createWinnerElement} from '../elements/createElement.js';

const pickWinner = (carEntry) => {
  const maxLength = findMaxDistanceCar(carEntry);
  const winner = carEntry.filter((car) => car.distance.length === maxLength);

  return winner;
};

const findMaxDistanceCar = (carEntry) => {
  const lengthArray = [];
  carEntry.forEach((car) => lengthArray.push(car.distance.length));

  return Math.max(...lengthArray);
};

export default function showWinner(carEntry) {
  const winnerCarsArray = pickWinner(carEntry);
  const winnerCarsNameArray = winnerCarsArray.map((car) => car.name);

  return createWinnerElement(winnerCarsNameArray);
}
