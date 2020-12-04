import RacingCarGame from './lib/classes/racingCarGame.js';
import {
  settingGame,
} from './lib/config/manipulateContainers.js';

const start = () => {
  settingGame();
  let racingCarGame = new RacingCarGame();
  racingCarGame.startGame();
}

start();