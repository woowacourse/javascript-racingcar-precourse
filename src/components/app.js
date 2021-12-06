import { CarNameInput } from './car-names-input.js';
import {
  hideNode,
  showNode,
  createResultNode,
  disableForm,
  Winners
} from '../utils/dom.js';
import { SELECTOR } from '../constants/constant.js';
import { Car } from '../model/car.js';
import { RacingGame } from '../model/racing-game.js';
import { RacingCount } from './racing-count.js';

export class App {
  constructor($target) {
    this.$target = $target;
    this.$carNamesForm = document.getElementById(SELECTOR.ID.CAR_NAMES_FORM);
    this.$racingCount = document.getElementById(SELECTOR.ID.RACING_COUNT_FORM);
    this.$racingCountCommand = document.getElementById(
      SELECTOR.ID.RACING_COUNT_COMMAND
    );
    this.$result = document.getElementById(SELECTOR.ID.RESULT);
    this.game = new RacingGame();
    this.init();
  }

  init() {
    this.activateCarNamesInput();
    this.unmount();
  }

  activateCarNamesInput() {
    this.carNamesInput = new CarNameInput(this.setCars.bind(this));
  }

  setCars(names) {
    this.activateRacingCount();
    this.game.cars = names.map((name) => new Car(name));
    disableForm(this.$carNamesForm);
  }

  setCount(count) {
    this.game.round = count;
    disableForm(this.$racingCount);
    this.startRacing();
  }

  unmount() {
    hideNode(this.$racingCount);
    hideNode(this.$racingCountCommand);
    hideNode(this.$result);
  }

  activateRacingCount() {
    showNode(this.$racingCountCommand);
    showNode(this.$racingCount);
    this.$racingCountInput = new RacingCount(this.setCount.bind(this));
  }

  startRacing() {
    showNode(this.$result);
    while (this.game.round) {
      this.game.moveCars();
      this.printState();
    }
    this.printWinner();
  }

  printState() {
    const $resultNode = createResultNode(this.game.cars);
    this.$target.appendChild($resultNode);
  }

  printWinner() {
    const winner = new Winners(this.game.winners);
    this.$target.appendChild(winner.$element);
  }
}
