import addTagID from './addTagID.js';
import addEventListener from './addEventListener.js';
import toggleResultScreen from './toggleResultScreen.js';
import toggleRaceNumberInputScreen from './toggleRaceNumberInputScreen.js';

export default function initializeGame() {
  addTagID();
  addEventListener();
  toggleResultScreen();
  toggleRaceNumberInputScreen();
}
