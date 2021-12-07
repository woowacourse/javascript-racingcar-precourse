const createRoundText = (cars) => {
  return cars.reduce((acc, car) => {
    car.move();
    return `${acc} ${car.name}: ${'-'.repeat(car.position)} </br>`;
  }, '');
};

export const createTotalRoundText = (racingCount, cars) => {
  let totalRoundText = '';

  for (let i = 0; i < racingCount; i += 1) {
    const roundText = createRoundText(cars);

    totalRoundText += `${roundText} </br>`;
  }

  return totalRoundText;
};

export const createResultText = (winners) => {
  return winners.join(',');
};
