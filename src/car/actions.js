import Car from './models.js';

const setRacingCars = function (_carNames) {
  const racingCars = _carNames.map((_carName) => new Car(_carName));

  return racingCars;
};

export { setRacingCars };
