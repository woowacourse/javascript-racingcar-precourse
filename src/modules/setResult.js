
export const showGameResult = (carsArr) => {
  const container = document.createElement('div');
  const space = document.createElement('br');
  
  carsArr.forEach(car => {
    const carList = `${car.name}: ${'-'.repeat(car.distance)} </br>`;
    container.innerHTML += carList;
  });

  document.body.appendChild(container);
  document.body.appendChild(space);
};

export const whoIsWinner = (finialCars) => {
  
};

export const printWinner = () => {};