import { $ } from './util/dom.js';
import { getCarNameInput } from './getCarName.js';
import { getRacingCountInput } from './getRacingCount.js';

const racingCountForm = $('#racing-count-form');

$('#racing-count-title').style.display = 'none';
$('#result-title').style.display = 'none';
racingCountForm.style.display = 'none';

$('#car-names-form').addEventListener('submit', getCarNameInput);
racingCountForm.addEventListener('submit', getRacingCountInput);
