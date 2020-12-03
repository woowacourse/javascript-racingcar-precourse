import CarName from './CarName.js';

export default class RacingCarGame {
  constructor() {
    this.submitCarNames();
  }

  submitCarNames() {
    const carNamesSubmitButton = document.querySelector('#car-names-submit');

    carNamesSubmitButton.addEventListener('click', () => {
      const carNames = new CarName();

      console.log(carNames.names);
    });
  }
}

new RacingCarGame();
