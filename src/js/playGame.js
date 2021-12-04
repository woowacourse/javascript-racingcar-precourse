import { Car } from './class/car.js';
import { $ } from './util/dom.js';
import { checkCarNameInput } from './getCarName.js';
import { checkRacingCountInput } from './getRacingCount.js';
import { removeBeforeResult, renderResult, getWinner } from './render.js';

export const startRacingGame = () => {
  const carNamesInput = $('#car-names-input').value.split(',');
  const racingCountInput = $('#racing-count-input').value;
  if (
    !checkCarNameInput(carNamesInput) &&
    !checkRacingCountInput(racingCountInput)
  ) {
    $('#result-title').style.display = '';
    removeBeforeResult();
    goAndStopCars(makeCars());
  } else {
    window.alert('잘못된 값을 입력하셨습니다.');
  }
};

const makeCars = () => {
  const carNames = $('#car-names-input').value.split(',');
  let cars = [];
  for (let i = 0; i < carNames.length; i++) {
    const car = new Car(carNames[i]);
    cars.push(car);
  }
  return cars;
};

const goAndStopCars = cars => {
  const racingCount = $('#racing-count-input').value;
  for (let i = 0; i < racingCount; i++) {
    for (let car in cars) {
      cars[car].startGame();
    }
    renderResult(cars);
  }
  getWinner(cars);
};
