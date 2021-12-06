import Model from '../model/model.js';
import { $ } from '../utils/utils.js';

export default class GameController {
  constructor() {
    this.model = new Model();
    this.setBinds();
    this.addEvents();
  }

  setBinds() {
    this.handleCarNames = this.handleCarNames.bind(this);
    this.handleRacingCount = this.handleRacingCount.bind(this);
  }

  addEvents() {
    const $carNamesForm = $('#car-names-form');
    const $racingCountForm = $('#racing-count-form');

    $carNamesForm.addEventListener('submit', this.handleCarNames);
    $racingCountForm.addEventListener('submit', this.handleRacingCount);
  }

  handleCarNames(e) {
    e.preventDefault();

    const carNamesInput = $('#car-names-input').value;

    try {
      this.model.saveCars(carNamesInput);
    } catch (err) {
      alert(err);
    }
  }

  handleRacingCount(e) {
    e.preventDefault();

    const racingCountInput = $('#racing-count-input').value;

    this.model.saveCount(racingCountInput);
  }
}
