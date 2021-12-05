import { $ } from './selector.js';

export const playRacingGame = (cars, racingCount) => {
  for (let i = 0; i < racingCount; i++) {
    cars = startRound(cars);
    showGameResult(cars);
  }
  showWinner(cars);
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
  const div = document.createElement('div');
  document.body.appendChild(div);

  cars.forEach(car => {
    const item = `${car.name}: ${'-'.repeat(car.point)} <br/>`;
    div.innerHTML += item;
  });
  div.innerHTML += '<br/>';
};

const showWinner = cars => {
  const winners = getWinner(cars);

  const div = document.createElement('div');
  document.body.appendChild(div);

  div.innerHTML = `최종 우승자: <span id="racing-winners">${winners.join(
    ','
  )}</span>`;
};

const getWinner = cars => {
  let winners = [];
  const maxValue = Math.max.apply(
    Math,
    cars.map(car => car.point)
  );
  cars.forEach(car => {
    if (maxValue === car.point) {
      winners.push(car.name);
    }
  });
  return winners;
};
