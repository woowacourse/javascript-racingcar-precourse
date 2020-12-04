import addTagID from './addTagID.js';
import toggleRaceNumberInputScreen from './toggleRaceNumberInputScreen.js';
import toggleResultScreen from './toggleResultScreen.js';

export default function initializeGame() {
  addTagID();
  toggleResultScreen();
  toggleRaceNumberInputScreen();
}
