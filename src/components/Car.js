export default class Car {
  constructor({ carName, racingCount }) {
    this.carName = carName;
    this.racingCount = racingCount;
    this.maxRandomNumber = 9;
    this.moveMinNumber = 4;
    this.isMovePerRound = this.race();
    this.totalMove = this.getTotalMove();
  }

  getRandomSingleDigitNumber = () => {
    return Math.floor(Math.random() * (this.maxRandomNumber + 1));
  };

  race = () => {
    const isMovePerRound = [];

    for (let i = 0; i < this.racingCount; i++) {
      const randomNumber = this.getRandomSingleDigitNumber();

      isMovePerRound.push(randomNumber < this.moveMinNumber ? false : true);
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
