import { $ } from './utils/dom.js';

class RacingCarGame {
  constructor() {
    this.addEventListeners();
  }

  addEventListeners() {
    $('#car-names-submit').addEventListener('click', this.onClickCarNameSubmitButton.bind(this));
  }

  onClickCarNameSubmitButton(event) {
    event.preventDefault();
    console.log('클릭');
  }
}

new RacingCarGame();
