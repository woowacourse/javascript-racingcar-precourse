import { $ } from '../dom/dom.js';

export default function hideRacingCountShow() {
  $('#racing-count-title').style.display = 'none';
  $('#racing-count-form').style.display = 'none';
  $('#racing-result-title').style.display = 'none';
}
