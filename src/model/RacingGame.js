import Car from './Car.js';
import splitWithoutMargin from '../utils/split.js';

const isWinner = (gameInstance, racerScore) => {
  const racingGame = gameInstance;
  const nowMaxScore = racingGame.winnerScore;
  if (racerScore < nowMaxScore) return false;

  if (racerScore > nowMaxScore) racingGame.winnerList = [];
  racingGame.winnerScore = racerScore;

  return true;
};

export default class RacingGame {
  constructor() {
    this.racerList = [];
    this.winnerList = [];
    this.count = 0;

    this.winnerScore = Number.MIN_SAFE_INTEGER;
  }

  setRacer(names) {
    const racerList = splitWithoutMargin(names, ',');

    racerList.forEach((name) => {
      const carInstance = new Car(name);
      this.racerList.push(carInstance);
    });
  }

  setPlay(count) {
    this.count = count;
    this.racerList.forEach((racer) => {
      const score = racer.move(count);
      if (isWinner(this, score) === false) return true;

      this.winnerList.push(racer.name);
    });
  }

  get gameResult() {
    const result = [];
    this.racerList.forEach((car) => {
      result.push(car.raceLogs);
    });

    return {
      winners: this.winnerList.join(', '),
      count: this.count,
      logs: result,
    };
  }
}
