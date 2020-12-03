import CarName from './CarName.js';

export default class RacingCarGame {
  constructor() {
    this.submitCarNames();
  }

  submitCarNames() {
    const carNamesSubmitButton = document.querySelector('#car-names-submit');

    carNamesSubmitButton.addEventListener('click', () => {
      const carNames = new CarName();

      if (carNames.names != null) {
        this.countRacing();
      }

      console.log(carNames.names);
    });
  }

  countRacing() {
    const countContainer = document.querySelector('#count-container');

    countContainer.style.display = 'block';
  }
}

new RacingCarGame();
