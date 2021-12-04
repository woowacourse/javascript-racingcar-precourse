import { $ } from './utils.js';

export default class CarRacingGame {
  constructor() {
    this.$carNamesInput = $('#car-names-input');
    this.$carNamesSubmit = $('#car-names-submit');
    this.$carNamesSubmit.addEventListener('click', (e) => this.handleCarNamesSubmit(e));
  }
  handleCarNamesSubmit = (e) => {
    e.preventDefault();
    const currentInput = this.$carNamesInput.value;
    const names = currentInput.split(',').map((item) => item.trim());
    this.$carNamesInput.value = '';
  };
}
new CarRacingGame();
