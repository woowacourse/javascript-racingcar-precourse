import addTagID from './addTagID.js';
import hideResultScreen from './hideResultScreen.js';
import hideRaceNumberInputScreen from './hideRaceNumberInputScreen.js';

export default function initializeGame() {
  addTagID();
  hideRaceNumberInputScreen();
  hideResultScreen();
}
