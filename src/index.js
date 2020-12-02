import getUserInput from './input/getUserInput.js';
import addTagID from './utils/addTagID.js';
import toggleRaceNumberInputScreen from './utils/toggleRaceNumberInputScreen.js';
import toggleResultScreen from './utils/toggleResultScreen.js';

export default function RacingCarGame() {
  addTagID();
  toggleRaceNumberInputScreen();
  toggleResultScreen();
  getUserInput();
}

new RacingCarGame();
