import addTagID from './addTagID.js';
import addEventListener from './addEventListener.js';
import toggleRaceNumberInputScreen from './toggleRaceNumberInputScreen.js';
import toggleResultScreen from './toggleResultScreen.js';

export default function initializeGame() {
  addTagID();
  addEventListener();
  toggleResultScreen();
  toggleRaceNumberInputScreen();
}
