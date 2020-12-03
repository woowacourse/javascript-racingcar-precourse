import {createWinnerElement} from './element.js';

const pickWinner = (carsArray) => {
  const maxLength = findMaxLengthCar(carsArray);
  const winner = carsArray.filter((car) => car.length.length === maxLength);

  return winner;
};

const findMaxLengthCar = (carsArray) => {
  const lengthArray = [];
  carsArray.forEach((car) => lengthArray.push(car.length.length));

  return Math.max(...lengthArray);
};

export default function showWinner(carsArray) {
  const winnerCarsArray = pickWinner(carsArray);
  const winnerCarsNameArray = winnerCarsArray.map((car) => car.name);

  return createWinnerElement(winnerCarsNameArray);
}
