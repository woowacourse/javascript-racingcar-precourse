import getRandomNumber from "../utils/getRandomNumber.js";

export default class RacingGame {
  constructor(carNames, racingCount) {
    this.carNames = carNames;
    this.racingCount = racingCount;
    this.racingGameRecord = {};
    this.initialGameRound = 0;
    this.maxScore = 0;
    this.forward = 4;
    this.stay = 3;

    this.initialSetGameRecord(this.carNames, this.initialGameRound);
    this.setGameRoundRecord(this.initialGameRound, this.racingCount);
  }

  initialSetGameRecord(carNames, gameRound) {
    this.racingGameRecord[gameRound] = {};
    carNames.forEach((car, idx) => {
      this.racingGameRecord[gameRound][idx] = {
        carName: car,
        score: 0,
      };
    });
  }

  setGameRoundRecord(gameRound, racingCount) {
    while (gameRound < racingCount) {
      gameRound++;

      this.racingGameRecord[gameRound] = {};
      this.setCarRecord(this.carNames, gameRound);
    }
  }

  setCarRecord(carNames, gameRound) {
    carNames.forEach((car, idx) => {
      let previousScore = this.racingGameRecord[gameRound - 1][idx]["score"];
      const randomNumber = getRandomNumber();
      let nowScore = previousScore + 1;

      this.setForwardCar(randomNumber, nowScore, car, gameRound, idx);
      this.setStayCar(randomNumber, previousScore, car, gameRound, idx);
    });
  }

  setForwardCar(randomNumber, nowScore, car, gameRound, idx) {
    if (randomNumber >= this.forward) {
      if (nowScore > this.maxScore) this.maxScore = nowScore;
      this.racingGameRecord[gameRound][idx] = {
        carName: car,
        score: nowScore,
      };
    }
  }

  setStayCar(randomNumber, previousScore, car, gameRound, idx) {
    if (randomNumber <= this.stay) {
      this.racingGameRecord[gameRound][idx] = {
        carName: car,
        score: previousScore,
      };
    }
  }
}
