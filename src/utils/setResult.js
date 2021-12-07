
export const showGameResult = carsArr => {
  const container = document.createElement('div');
  const space = document.createElement('br');

  carsArr.forEach(car => {
    const carList = `${car.name}: ${'-'.repeat(car.distance)} </br>`;
    container.innerHTML += carList;
  });

  document.body.appendChild(container);
  document.body.appendChild(space);
};

export const whoIsWinner = finalCars => {
  finalCars.sort((a, b) => b.distance - a.distance);

  const result = finalCars.map(car => finalCars[0].distance === car.distance ? car.name : '');

  return result;
};

export const printWinner = finalCars => {
  const result = whoIsWinner(finalCars);
  const container = document.createElement('div');
  const finalResult = `최종 우승자: <span id="racing-winners">${result.filter(val => val !== '').join(',')}</span>`;

  container.innerHTML = finalResult;
  document.body.appendChild(container);
};
