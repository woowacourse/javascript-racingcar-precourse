import { MAX_SIZE } from '../validation/checker.js';

const { pickNumberInRange } = MissionUtils.Random;

export default class RacingGame {
  constructor(cars, racingCount) {
    this._cars = cars;
    this._racingCount = racingCount;
    this._roundResultData = [];
    this._winnerNames = [];
    this.startGame();
    this.judgeWinner();
  }

  getResult = () => {
    return this._roundResultData;
  };

  getWinners = () => {
    return this._winnerNames;
  };

  startGame = () => {
    for (let i = 0; i < this._racingCount; i++) {
      this._roundResultData.push(this.startRound());
    }
  };

  startRound = () => {
    let roundResult = [];

    for (const car of this._cars) {
      const ramdomValue = pickNumberInRange(0, 9);
      car.go(ramdomValue);
      roundResult.push(car.getData());
    }

    return roundResult;
  };

  getMaxDistance = datas => {
    let distances = [];
    for (const data of datas) {
      distances.push(data.distance);
    }

    return Math.max(...distances);
  };

  judgeWinner = () => {
    const length = this._roundResultData.length;
    const finalResultData = this._roundResultData[length - 1];
    const winDistance = this.getMaxDistance(finalResultData);

    for (const data of finalResultData) {
      if (data.distance == winDistance) {
        this._winnerNames.push(data.name);
      }
    }
  };
}
