export const getRandomNumber = (min, max) => {
    
  return Math.floor((Math.random() * (max - min + 1)) + min);
};

export const isMovingForward = () => {
  const MIN = 0;
  const MAX = 9;
  const BASE_POINT = 4;
  
  const randomNumber = getRandomNumber(MIN, MAX);

  return randomNumber >= BASE_POINT;
};

export const isValidCarNamesInput = carNamesInput => {
  const MIN_CAR_NUMBER = 2;
  const MAX_CAR_NAME_LENGTH = 5;

  const carNames = carNamesInput.split(",").map(carName => carName.trim());

  const hasMinCarNumbers =
    (carNames.length >= MIN_CAR_NUMBER);
  
  const isEveryCarNameLengthLessThanMaxLength =
    (carNames.every(carName => carName.length <= MAX_CAR_NAME_LENGTH));

  return hasMinCarNumbers && isEveryCarNameLengthLessThanMaxLength;
};

export const isValidRacingCount = racingCountNumber => {
  const MIN_COUNT = 0;
  
  return Number.isInteger(racingCountNumber) &&
    (racingCountNumber > MIN_COUNT);
};

export const getWinners = cars => {
  const maxPosition = Math.max(...cars.map(car => car.getPosition()));
  const winners = cars.filter(car => car.getPosition() === maxPosition);

  return winners;
};