import getUserInput from './input/getUserInput.js';
import initializeGame from './utils/initializeGame.js';

export default function RacingCarGame() {
  initializeGame();
  getUserInput();
}

new RacingCarGame();
