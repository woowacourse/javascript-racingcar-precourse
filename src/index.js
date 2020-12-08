import Car from './car.js';
import RacingCarGame from './game.js';

export const carNamesInput = document.getElementById('car-names-input');
export const carNamesSubmit = document.getElementById('car-names-submit');
const cars = [];

carNamesSubmit.onclick = () => {
  document.getElementById('racing-count').style.display = 'block';
  const inputs = carNamesInput.value.split(',');
  inputs.forEach((input) => {
    cars.push(new Car(input));
  });
};
