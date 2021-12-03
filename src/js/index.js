import { $ } from './util/dom.js';
import { getCarNameInput } from './getCarName.js';

$('#racing-count-title').style.display = 'none';
$('#racing-count-form').style.display = 'none';
$('#result-title').style.display = 'none';

$('#car-names-form').addEventListener('submit', getCarNameInput);
