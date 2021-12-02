import CarNamesEvent from './events/CarNamesEvent.js';
import RacingCountEvent from './events/RacingCountEvent.js';

class RacingCar {
  constructor() {
    this.main();
  }

  racingCarSubmit = () => {
    const racingCountEvent = new RacingCountEvent();
    racingCountEvent.onClickSubmit();
  };

  carNamesSubmit = () => {
    const carNamesEvent = new CarNamesEvent();
    carNamesEvent.onClickSubmit();
  };

  main = () => {
    this.carNamesSubmit();
    this.racingCarSubmit();
  };
}

new RacingCar();
