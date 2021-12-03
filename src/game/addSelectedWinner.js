import { cars } from '../init/cars.js';

function getMaxCount() {
  return cars.reduce((acc, { count }) => {
    if (count > acc) {
      return count;
    }
    return acc;
  }, 0);
}

function selectWinner(maxCount) {
  const selectedWinner = cars.filter((car) => {
    if (car.count === maxCount) {
      return true;
    }
    return false;
  });
  return selectedWinner;
}

export default function addSelectedWinner() {
  const maxCount = getMaxCount();
  const selectedWinnerArray = selectWinner(maxCount);
  console.log('우승자', selectedWinnerArray);
}
