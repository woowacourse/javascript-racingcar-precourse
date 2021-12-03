/* eslint-disable no-undef */
import { NUMBER } from '../constants/index.js';
import Car from './Car.js';
import Render from './Render.js';

const { pickNumberInRange } = MissionUtils.Random;

export default class RacingGame {
  constructor($element) {
    this.render = new Render($element);

    this.racingCars = [];
  }

  isNotRegisteredCars() {
    return !this.racingCars.length;
  }

  oneTrackRaceMaxMove(race, start, end) {
    return this.racingCars.reduce((maxMoves, car) => {
      const [moveCount, raceResult] = car.moveForward(pickNumberInRange(start, end));
      this.render.appendChildDOM(race, raceResult);
      return maxMoves <= moveCount ? moveCount : maxMoves;
    }, 0);
  }

  initialCars(carNames = []) {
    this.render.initDOM();
    this.racingCars = carNames.map(name => new Car(name, NUMBER.CONDITION));
  }

  gameStart({ count, start = 0, end = 9 }) {
    const finished = Array.from({ length: count }).reduce((result, _, racing) => {
      this.render.createDOM(racing);
      return [...result, this.oneTrackRaceMaxMove(racing, start, end)];
    }, []);

    return this.gameResult(finished[count - 1]);
  }

  gameResult(maxMoves) {
    const getWinnerCars = this.racingCars
      .reduce((result, car) => (car.moveCount === maxMoves ? [...result, car.name] : result), [])
      .join(', ');
    this.render.renderDOM(getWinnerCars);
  }
}
