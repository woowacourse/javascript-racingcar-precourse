import { $ } from '../utils/dom.js';

class RacingResult {
  createDOM() {
    const racingWinnerContainer = document.createElement('div');
    racingWinnerContainer.id = 'racing-winner-container';
    $('#app').appendChild(racingWinnerContainer);
  }
}

export default RacingResult;
