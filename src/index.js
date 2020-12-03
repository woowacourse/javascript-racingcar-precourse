import RacingCarGame from '/src/lib/classes/racingCarGame.js';

const startGame = () => {
  let racingCarGame = new RacingCarGame();
  racingCarGame._settingGame();
  racingCarGame._getUserInputs();

  
}

startGame();