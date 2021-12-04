import RacingGame from './RacingGame.js';
import initForms from './functions/initForms.js';
import initHTML from './functions/initHTML.js';

initHTML();

const racingGame = new RacingGame();
initForms(racingGame);
