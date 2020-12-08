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

export { setRacingCars, moveRacingCars };
