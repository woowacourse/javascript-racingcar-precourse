import CarNamesEvent from './events/CarNamesEvent.js';

class RacingCar {
  constructor() {
    this.main();
  }

  carNamesSubmit = () => {
    const carNamesEvent = new CarNamesEvent();
    carNamesEvent.submitBtn();
  };

  main = () => {
    this.carNamesSubmit();
  };
}

new RacingCar();
