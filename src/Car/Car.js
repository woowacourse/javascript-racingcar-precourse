import RandomNumber from '../getRandomNumber/RandomNumber.js';

export default class Car {
  constructor(carNamesEvent, racingCountEvent) {
    this.randomNumber = new RandomNumber();
    this.carNamesEvent = carNamesEvent;
    this.racingCountEvent = racingCountEvent;
    this.carNames = [];
    this.racingCount = 0;
    this.randomNumbers = [];
  }

  getRandomNumbers = () => {
    for (let i = 0; i < this.racingCount; i += 1) {
      const randomArray = [];

      for (let j = 0; j < this.carNames.length; j += 1) {
        randomArray.push(this.randomNumber.get());
      }

      this.randomNumbers.push(randomArray);
    }

    console.log(this.randomNumbers);
  };

  readyGame = () => {
    this.carNames = this.carNamesEvent.carNamesArray;
    this.racingCount = this.racingCountEvent.numberRacingCount;
    this.getRandomNumbers();
  };
}
