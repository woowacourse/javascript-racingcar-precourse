import { setRacingCars, moveRacingCars } from '../car/actions.js';

const checkRacingLog = function (_racingCars) {
  let racingLog = '';

  for (let i = 0; i < _racingCars.length; i++) {
    const racingCar = _racingCars[i];

    racingLog += `${racingCar.name}: ${'-'.repeat(racingCar.moveCount)}\n`;
  }

  return `${racingLog}\n`;
};

const pickWinner = function (_racingCars) {
  let maxMoveCount = 0;
  let winners = [];

  for (let i = 0; i < _racingCars.length; i++) {
    const racingCar = _racingCars[i];

    if (racingCar.moveCount > maxMoveCount) {
      maxMoveCount = racingCar.moveCount;
      winners = [racingCar.name];
    } else if (racingCar.moveCount === maxMoveCount) {
      winners.push(racingCar.name);
    }
  }

  return `최종우승자: ${winners.join(', ')}`;
};

export default function play(_carNames, _racingCount) {
  const racingCars = setRacingCars(_carNames);
  let racingResult = '';

  for (let i = 0; i < _racingCount; i++) {
    moveRacingCars(racingCars);
    racingResult += checkRacingLog(racingCars);
  }

  racingResult += pickWinner(racingCars);

  return racingResult;
}
