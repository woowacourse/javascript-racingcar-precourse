import Car from './car.js';
import RacingCarGame from './game.js';

export const carNamesInput = document.getElementById('car-names-input');
export const carNamesSubmit = document.getElementById('car-names-submit');
export const racingCountInput = document.getElementById('racing-count-input');
export const racingCountSubmit = document.getElementById('racing-count-submit');
const cars = [];

carNamesSubmit.onclick = () => {
  document.getElementById('racing-count').style.display = 'block';
  const inputs = carNamesInput.value.split(',');
  inputs.forEach((input) => {
    cars.push(new Car(input));
  });
};

racingCountSubmit.onclick = () => {
  result.style.display = 'block';
  let text = '';
  for (let i = 0; i < racingCountInput.value; i++) {
    new RacingCarGame(cars);
  }
};
