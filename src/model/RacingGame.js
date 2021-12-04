import Car from './Car.js';

export default class RacingGame {
  constructor() {
    this.carList = [];
    this.winnerList = [];
    this.count = 0;

    this.winnerScore = Number.MIN_SAFE_INTEGER;
  }

  isWinner(playerScore) {
    const nowMaxScore = this.winnerScore;
    if (playerScore < nowMaxScore) return false;

    if (playerScore > nowMaxScore) this.winnerList = [];
    this.winnerScore = playerScore;
    return true;
  }

  setRacer(names) {
    const playerList = names.split(',');

    playerList.forEach((name) => {
      const carInstance = new Car(name);
      this.carList.push(carInstance);
    });
  }

  setPlay(count) {
    this.count = count;
    this.carList.forEach((car) => {
      const score = car.move(count);
      if (this.isWinner(score) === false) return true;

      this.winnerList.push(car.name);
    });
  }

  get gameResult() {
    const result = [];
    this.carList.forEach((car) => {
      result.push(car.raceLogs);
    });

    return {
      winners: this.winnerList.join(', '),
      count: this.count,
      logs: result,
    };
  }
}
