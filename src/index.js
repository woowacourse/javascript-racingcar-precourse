import RacingGame from './RacingGame.js';
import initHTML from './utils/initializers/initHTML.js';
import initForms from './utils/initializers/initForms.js';

initHTML();

const racingGame = new RacingGame();
initForms(racingGame);
