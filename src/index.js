import Car from './Car.js';
import isValidCarNames from './utils/utils.js';
import { $, hideElement, showElement } from './dom/helpers.js';

function App() {
  hideElement('#racing-count-heading');
  hideElement('#racing-count-form');
  hideElement('#result-heading');

  $('#car-names-form').addEventListener('submit', (e) => {
    e.preventDefault();
  });
  document
    .querySelector('#racing-count-form')
    .addEventListener('submit', (e) => {
      e.preventDefault();
    });

  $('#car-names-submit').addEventListener('click', () => {
    const inputString = $('#car-names-input').value.trim();
    const nameList = inputString.split(',').map((name) => name.trim());

    if (!isValidCarNames(nameList)) {
      alert('잘못된 입력입니다.');
      $('#car-names-input').value = '';

      return;
    }

    const carList = nameList.map((name) => new Car(name));

    console.log(carList);

    showElement('#racing-count-heading');
    showElement('#racing-count-form');
  });

  $('#racing-count-submit').addEventListener('click', () => {
    console.log($('#racing-count-input').valueAsNumber);
  });
}

App();
