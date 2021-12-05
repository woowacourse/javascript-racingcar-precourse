import { $ } from './selector.js';

export const playRacingGame = (cars, racingCount) => {
  for (let i = 0; i < racingCount; i++) {
    cars = startRound(cars);
    showGameResult(cars);
  }
  getWinner(cars);
};

const startRound = cars => {
  cars.forEach(car => {
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

const showGameResult = cars => {
  cars.forEach(car => {
    const item = `${car.name}: ${'-'.repeat(car.point)} <br/>`;
    $('#racing-round-result').innerHTML += item;
  });
  $('#racing-round-result').innerHTML += '<br/>';
};

const getWinner = cars => {};
