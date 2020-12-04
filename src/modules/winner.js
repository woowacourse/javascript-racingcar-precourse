import {createWinnerElement} from '../elements/createElement.js';

const pickWinner = (carsArray) => {
  const maxLength = findMaxDistanceCar(carsArray);
  const winner = carsArray.filter((car) => car.distance.length === maxLength);

  return winner;
};

const findMaxDistanceCar = (carsArray) => {
  const lengthArray = [];
  carsArray.forEach((car) => lengthArray.push(car.distance.length));

  return Math.max(...lengthArray);
};

export default function showWinner(carsArray) {
  const winnerCarsArray = pickWinner(carsArray);
  const winnerCarsNameArray = winnerCarsArray.map((car) => car.name);

  return createWinnerElement(winnerCarsNameArray);
}
