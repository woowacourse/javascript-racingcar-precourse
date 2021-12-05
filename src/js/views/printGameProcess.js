import $ from '../utils/dom.js';

const printGameProcess = objArr => {
  objArr.forEach(car => {
    $('#result-wrapper').insertAdjacentHTML('beforeend', `${car.name}: ${car.move ? '-'.repeat(car.move) : ''} <br>`);
  });
  $('#result-wrapper').insertAdjacentHTML('beforeend', `<br>`);
};

export default printGameProcess;
