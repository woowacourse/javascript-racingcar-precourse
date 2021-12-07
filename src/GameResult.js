import { app } from './elements.js';

export function setCarForwardResult() {
  for (let i = 0; i < window.cars.length; i += 1) {
    const car = window.cars[i];
    const carName = car.name;
    const carForwards = '-'.repeat(car.forwardCount);

    app.innerHTML += `${carName}: ${carForwards}<br>`;
  }
  app.innerHTML += '<br>';
}

function getMaxForwardCount() {
  const forwardCounts = window.cars.map((elem) => elem.forwardCount);

  return Math.max.apply(null, forwardCounts);
}

function getFinalWinners() {
  const maxForwardCount = getMaxForwardCount();
  const winner = [];

  for (let i = 0; i < window.cars.length; i += 1) {
    const car = window.cars[i];

    if (car.forwardCount === maxForwardCount) {
      winner.push(car.name);
    }
  }

  return winner.join(', ');
}

export function setFinalWinners() {
  app.innerHTML += '최종 우승자: ';

  const span = document.createElement('span');
  span.setAttribute('id', 'racing-winners');
  const finalWinners = getFinalWinners();
  span.innerText = finalWinners;

  app.appendChild(span);
}
