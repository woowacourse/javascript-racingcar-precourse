export default class Car {
  constructor(carNamesEvent, racingCountEvent) {
    this.carNamesEvent = carNamesEvent;
    this.racingCountEvent = racingCountEvent;
    this.carNamesArray = [];
    this.racingCount = 0;
  }

  readyGame = () => {
    this.carNames = this.carNamesEvent.carNamesArray;
    this.racingCount = this.racingCountEvent.numberRacingCount;
  };
}
