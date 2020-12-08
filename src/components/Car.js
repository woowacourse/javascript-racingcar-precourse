import { GAME_NUMBERS } from "../util/constants.js";

export default class Car {
  constructor({ carName, racingCount }) {
    this.carName = carName;
    this.racingCount = racingCount;
    this.isMovePerRound = this.race();
    this.totalMove = this.getTotalMove();
  }

  getRandomSingleDigitNumber = () => {
    return Math.floor(Math.random() * (GAME_NUMBERS.maxRandomNumber + 1));
  };

  race = () => {
    const isMovePerRound = [];

    for (let i = 0; i < this.racingCount; i++) {
      const randomNumber = this.getRandomSingleDigitNumber();

      isMovePerRound.push(randomNumber < GAME_NUMBERS.moveMinNumber ? false : true);
    }

    return isMovePerRound;
  };

  getTotalMove = () => {
    let totalMove = 0;

    this.isMovePerRound.forEach((isMove) => {
      if (isMove) {
        totalMove++;
      }
    });

    return totalMove;
  };
}
