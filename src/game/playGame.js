import showRaceResult from '../view/showRaceResult.js';
import showWinners from '../view/showWinners.js';
import GameController from './GameController.js';

function goOnce(cars) {
  cars.forEach((car) => car.go());
}

function getCarPositions(cars) {
  return cars.map((car) => car.getPosition());
}

function getMaxPosition(cars) {
  return Math.max.apply(null, getCarPositions(cars));
}

function getWinners(cars) {
  const max = getMaxPosition(cars);
  return cars.filter((car) => car.getPosition() === max);
}

function decideWinners(cars) {
  const winners = getWinners(cars);
  showWinners(winners);
}

export default function playGame(userInput, view) {
  const controller = new GameController(userInput);

  view.initView();
  for (let index = 0; index < userInput.getRepeatCount(); index += 1) {
    goOnce(controller.cars);
    showRaceResult(controller.cars);
  }
  decideWinners(controller.cars);
}
