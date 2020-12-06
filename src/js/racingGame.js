/*
4이상 전진 "-" forward
3이하 멈춤 "" stay
*/

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
      //this.setCarRecord()
    }
  }

  //   setCarRecord() {}
}
