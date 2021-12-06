import { $ } from '../utils/utils.js';

export default class GameView {
  resetRacingCountInput() {
    const $racingCountInput = $('#racing-count-input');

    $racingCountInput.value = '';
  }

  resetCarNamesInput() {
    const $carNamesInput = $('#car-names-input');

    $carNamesInput.value = '';
  }
}
