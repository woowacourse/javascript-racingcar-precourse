import MakeRandomNumbers from './random.js';

function playGame(cars) {
  const randNums = new MakeRandomNumbers(cars.length).nums;
  for (let i = 0; i < cars.length; i++)
    if (randNums[i] >= 4) cars[i].win += '-';
}

export default function RacingCarGame(cars) {
  playGame(cars);
}
