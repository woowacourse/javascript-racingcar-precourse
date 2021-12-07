import { carNamesSubmit, racingCountSubmit } from './elements.js';

import onCarNamesSubmit from './Car.js';
import onRacingCountSubmit from './RacingCount.js';

function initialize() {
  carNamesSubmit.addEventListener('click', onCarNamesSubmit);
  racingCountSubmit.addEventListener('click', onRacingCountSubmit);
}

initialize();
