/* eslint-disable no-undef */
import { NUMBER } from '../constants/index.js';
import Car from './Car.js';

const { pickNumberInRange } = MissionUtils.Random;

export default class RacingGame {
  constructor() {
    this.racingCars = [];
  }

  oneTrackRaceMaxMove(race, start, end) {
    return this.racingCars.reduce((maxMoves, car) => {
      const { moveCount } = car.moveForward(pickNumberInRange(start, end));
      return maxMoves <= moveCount ? moveCount : maxMoves;
    }, 0);
  }

  initialCars(carNames) {
    this.racingCars = carNames.map(name => new Car(name, NUMBER.CONDITION));
  }

  gameStart({ count, start = 0, end = 9 }) {
    const finished = Array.from({ length: count }).reduce(
      (result, _, racing) => [...result, this.oneTrackRaceMaxMove(racing, start, end)],
      [],
    );

    return this.gameResult(finished[count - 1]);
  }

  gameResult(maxMoves) {
    const getWinnerCars = this.racingCars
      .reduce((result, car) => (car.moveCount === maxMoves ? [...result, car.name] : result), [])
      .join(', ');
  }
}
