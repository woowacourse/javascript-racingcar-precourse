import Car from './car.js';
import RacingCarGame from './game.js';

export const carNamesInput = document.getElementById('car-names-input');
export const carNamesSubmit = document.getElementById('car-names-submit');
export const racingCountInput = document.getElementById('racing-count-input');
export const racingCountSubmit = document.getElementById('racing-count-submit');
const cars = [];

carNamesSubmit.onclick = () => {
  const inputs = carNamesInput.value.split(',');
  let find = false;
  inputs.forEach((input) => {
    if (input.length > 5) {
      alert('입력값에 문제가 있습니다. 다시 입력하세요!');
      carNamesInput.value = '';
      find = true;
      cars = [];
    } else cars.push(new Car(input));
  });
  if (!find) document.getElementById('racing-count').style.display = 'block';
};

racingCountSubmit.onclick = () => {
  result.style.display = 'block';
  let text = '';
  for (let i = 0; i < racingCountInput.value; i++) {
    new RacingCarGame(cars);
    cars.forEach((car) => {
      text += `<div>${car.name}: ${car.win}</div>`;
    });
    text += '<br>';
  }
  text += `최종 우승자: ${getFinalWinners(cars)}`;
  result.innerHTML = text;
};

function getMaxWinCounts(cars) {
  let maxValue = 0;
  cars.forEach((car) => {
    maxValue = maxValue < car.win.length ? car.win.length : maxValue;
  });
  return maxValue;
}

function getFinalWinners(cars) {
  const maxWinCounts = getMaxWinCounts(cars);
  return cars
    .filter((car) => car.win.length === maxWinCounts)
    .map((car) => car.name)
    .join(', ');
}
