import {
  carNamesSubmit,
  gameResultHeader,
  racingCountForm,
  racingCountHeader,
} from './elements.js';

import onCarNamesSubmit from './Car.js';

function initialize() {
  carNamesSubmit.addEventListener('click', onCarNamesSubmit);
  racingCountHeader.style.display = 'none';
  racingCountForm.style.display = 'none';
  gameResultHeader.style.display = 'none';
}

initialize();
