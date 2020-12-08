function getMaxCount(carList) {
  return carList.reduce((acc, { count }) => {
    if (count > acc) {
      return count;
    }
    return acc;
  }, 0);
}

export default function getWinner(carList) {
  const maxCount = getMaxCount(carList);
  const winner = carList.filter((car) => {
    if (car.count === maxCount) {
      return true;
    }
    return false;
  });

  return winner.map((car) => car.name).join(', ');
}
