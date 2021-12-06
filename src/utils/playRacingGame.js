import { showGameResult, showWinner } from './showResults.js';

export const playRacingGame = (cars, racingCount) => {
  for (let i = 0; i < racingCount; i++) {
    cars = startRound(cars);
    showGameResult(cars);
  }
  showWinner(cars);
};

const startRound = (cars) => {
  cars.forEach((car) => {
    if (isMove()) {
      car.point++;
    }
  });
  return cars;
};

const isMove = () => {
  const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
  if (randomNumber >= 4) {
    return true;
  }
  return false;
};
