import RacingCarGame from '/src/lib/classes/racingCarGame.js';
import {
  settingGame,
} from '/src/lib/config/manipulateContainers.js';

const start = () => {
  settingGame();
  let racingCarGame = new RacingCarGame();
  racingCarGame.startGame();
}

start();