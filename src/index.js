import Car from './Car/Car.js';
import { DOM } from './constant/constant.js';
import CarNamesEvent from './events/CarNamesEvent.js';
import RacingCountEvent from './events/RacingCountEvent.js';
import RandomNumber from './getRandomNumber/RandomNumber.js';

class RacingCar {
  constructor() {
    this.carNamesEvent = new CarNamesEvent();
    this.racingCountEvent = new RacingCountEvent(this.carNamesEvent);
    this.$racingCountSubmit = DOM.racingCountSubmit;
    this.$racingCountInput = DOM.racingCountInput;
    this.$carNamesSubmit = DOM.carNamesSubmit;
    this.carNames = [];
    this.randomNumbers = [];
    this.racingCount = 0;
    this.resultRacing = [];
    this.main();
  }

  getResultString = (car) => {
    return car.resultString();
  };

  isMoveCar = (randomNumber, car) => {
    if (randomNumber >= 4) {
      car.distanceIncrease();
    }
  };

  racingGameStart = () => {
    this.carNames.forEach((currentCarName, currentCarIndex) => {
      const currentCar = new Car(currentCarName);
      const currentCarResultRacing = [];

      for (let currentCount = 0; currentCount < this.racingCount; currentCount += 1) {
        this.isMoveCar(this.randomNumbers[currentCount][currentCarIndex], currentCar);
        currentCarResultRacing.push(this.getResultString(currentCar));
      }

      this.resultRacing.push(currentCarResultRacing);
    });
  };

  getRandomNumbers = () => {
    this.randomNumber = new RandomNumber(this.carNames, this.racingCount);
    this.randomNumbers = this.randomNumber.get();
  };

  racingCountInputFocus = () => {
    this.racingCountEvent.onFocusInput();
  };

  racingCountSubmit = () => {
    this.$racingCountSubmit.addEventListener('click', (event) => {
      event.preventDefault();
      this.racingCountEvent.checkCarNames();
      [this.racingCount, this.carNames] = this.racingCountEvent.validateCount();
      this.getRandomNumbers();
      this.racingGameStart();
    });
  };

  carNamesSubmit = () => {
    this.$carNamesSubmit.addEventListener('click', (event) => {
      event.preventDefault();
      if (!this.carNamesEvent.validateNames()) {
        this.carNamesEvent.alertMessage();
      }
    });
  };

  main = () => {
    this.carNamesSubmit();
    this.racingCountSubmit();
    this.racingCountInputFocus();
  };
}

new RacingCar();
