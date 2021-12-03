export default class RandomNumber {
  constructor(carNames, racingCount) {
    this.carNames = carNames;
    this.racingCount = racingCount;
    this.randomNumbers = [];
  }

  pickRandomNumber = () => {
    return MissionUtils.Random.pickNumberInRange(0, 9);
  };

  get = () => {
    console.log('123');
    for (let i = 0; i < this.racingCount; i += 1) {
      const randomArray = [];

      for (let j = 0; j < this.carNames.length; j += 1) {
        randomArray.push(this.pickRandomNumber());
      }

      this.randomNumbers.push(randomArray);
    }

    return this.randomNumbers;
  };
}
