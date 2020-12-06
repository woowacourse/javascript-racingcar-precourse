import addTagID from './addTagID.js';
import hideScreen from './hideScreen.js';
import addEventListener from './addEventListener.js';

export default function initializeGame() {
  addTagID();
  addEventListener();
  hideScreen();
}
