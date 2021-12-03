import $ from '../common/selector.js';

export const showResult = cars => {
  cars.forEach(car => {
    $('#result').innerHTML += `${car.name}: ${'-'.repeat(car.distance)} <br />`;
  });

  $('#result').innerHTML += '<br />';
};
