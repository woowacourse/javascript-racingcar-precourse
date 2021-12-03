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
    this.main();
  }

  getRandomNumbers = () => {
    this.randomNumber = new RandomNumber(this.carNames, this.racingCount);
    this.randomNumbers = this.randomNumber.get();
    console.log(this.randomNumbers);
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
