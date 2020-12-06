import Car from './models.js';

const setRacingCars = function (_carNames) {
  const racingCars = _carNames.map((_carName) => new Car(_carName));

  return racingCars;
};

const setRandomNumber = function () {
  return Math.floor(Math.random() * 9) + 1;
};

const moveRacingCars = function (_racingCars) {
  for (let i = 0; i < _racingCars.length; i++) {
    const racingCar = _racingCars[i];
    const randomNumber = setRandomNumber();

    if (randomNumber >= 4) {
      racingCar.moveCount += 1;
    }
  }
};

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

export { setRacingCars, moveRacingCars, checkRacingLog, pickWinner };
