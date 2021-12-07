import { carNamesSubmit } from './elements.js';

import onCarNamesSubmit from './Car.js';

function initialize() {
  carNamesSubmit.addEventListener('click', onCarNamesSubmit);
}

initialize();
