import playGame from './game/playGame.js';
import initializeGame from './init/initializeGame.js';

export default function RacingCarGame() {
  initializeGame();
  playGame();
}

new RacingCarGame();
