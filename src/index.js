import CarGameContainer from './components/car-game-container.js';
import GamePlay from './components/game-play.js';
import Component from './library/core/component.js';
import State from './library/core/state.js';

export default class RacingCarGame extends Component {
  #gameData;

  constructor() {
    super();
    this.initializeStates();
    this.initializeComponents();
  }

  initializeStates() {
    this.#gameData = new State({
      cars: [],
      racingCount: 0,
    });
  }

  initializeComponents() {
    const $carGameContainer = document.querySelector('.car-game-container');
    const $gameResult = document.querySelector('#game-result');
    new CarGameContainer($carGameContainer, { gameData: this.#gameData });
    new GamePlay($gameResult, { gameData: this.#gameData });
  }
}

window.onload = new RacingCarGame();
