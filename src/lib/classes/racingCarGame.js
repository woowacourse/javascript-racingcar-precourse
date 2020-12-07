import { addIdToElements } from '../utils/documentHandler.js';

export default class RacingCarGame {
  constructor() {
    this.prepareDOM();
    this.carNamesInput = document.querySelector('#car-names-input');
    this.carNamesSubmit = document.querySelector('#car-names-submit');
    this.racingCountInput = document.querySelector('#racing-count-input');
    this.racingCountSubmit = document.querySelector('#racing-count-submit');
    this.countInputPart = document.querySelector('#count-input-part');
    this.resultPart = document.querySelector('#result-part');
    this.carNamesSubmit.addEventListener('click', this.getCarNames.bind(this));
    this.racingCountSubmit.addEventListener(
      'click',
      this.getNumTries.bind(this)
    );
    this.cars = [];
    this.winners = [];
    this.maxProgress = 0;
    this.nTries = 0;
  }

  async prepareDOM() {
    await addIdToElements();
  }

  getCarNames() {}

  getNumTries() {}
}
