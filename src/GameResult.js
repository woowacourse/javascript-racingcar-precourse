import { app } from './elements.js';

export default function setCarForwardResult() {
  for (let i = 0; i < window.cars.length; i += 1) {
    const car = window.cars[i];
    const carName = car.name;
    const carForwards = '-'.repeat(car.forwardCount);

    app.innerHTML += `${carName}: ${carForwards}<br>`;
  }
  app.innerHTML += '<br>';
}
