import $ from '../utils/dom.js';

const printGameProcess = cars => {
  cars.forEach(car => {
    $('#result-process').insertAdjacentHTML('beforeend', `${car.name}: ${car.move ? '-'.repeat(car.move) : ''} <br>`);
  });
  $('#result-process').insertAdjacentHTML('beforeend', `<br>`);
};

export default printGameProcess;
