import CarGameContainer from './components/car-game-container.js';
import Component from './library/core/component.js';

export default class RacingCarGame extends Component {
  constructor() {
    super();
    this.initializeComponents();
  }

  initializeComponents() {
    const $carGameContainer = document.querySelector('.car-game-container');
    new CarGameContainer($carGameContainer);
  }
}

window.onload = new RacingCarGame();
