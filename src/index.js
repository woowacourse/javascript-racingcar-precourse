import { $$ } from './utils/dom.js';

$$('form').forEach((selector) =>
  selector.addEventListener('submit', function (e) {
    e.preventDefault();
  })
);
