import CarGameContainer from './components/car-game-container.js';

export default class RacingCarGame {
  constructor() {
    this.initializeComponents();
  }

  initializeComponents() {
    const $carGameContainer = document.querySelector('.car-game-container');
    new CarGameContainer($carGameContainer);
  }
}

window.onload = new RacingCarGame();
