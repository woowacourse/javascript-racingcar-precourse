function getMaxCount(carList) {
  let maxCount = 0;
  carList.forEach((car) => {
    if (maxCount < car.count) {
      maxCount = car.count;
    }
  });

  return maxCount;
}

export default function getWinner(carList) {
  const maxCount = getMaxCount(carList);
  return carList.filter((car) => {
    if (car.count === maxCount) {
      return true;
    }
    return false;
  });
}
