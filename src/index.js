import CarNamesEvent from './events/CarNamesEvent.js';
import RacingCountEvent from './events/RacingCountEvent.js';

class RacingCar {
  constructor() {
    this.carNamesEvent = new CarNamesEvent();
    this.racingCountEvent = new RacingCountEvent(this.carNamesEvent);
    this.main();
  }

  racingCountInputFocus = () => {
    this.racingCountEvent.onFocusInput();
  };

  racingCountSubmit = () => {
    this.racingCountEvent.onClickSubmit();
  };

  carNamesSubmit = () => {
    this.carNamesEvent.onClickSubmit();
  };

  main = () => {
    this.carNamesSubmit();
    this.racingCountSubmit();
    this.racingCountInputFocus();
  };
}

new RacingCar();
