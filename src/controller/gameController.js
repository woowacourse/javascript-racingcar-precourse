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
  }

  addEvents() {
    const $carNamesForm = $('#car-names-form');

    $carNamesForm.addEventListener('submit', this.handleCarNames);
  }

  handleCarNames(e) {
    e.preventDefault();

    const carNamesInput = $('#car-names-input').value;

    this.model.saveCars(carNamesInput);
  }
}
