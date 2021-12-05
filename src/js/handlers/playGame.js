import $ from '../utils/dom.js';
import printGameProcess from '../views/printGameProcess.js';
import printWinner from '../views/printWinner.js';
import getCarArr from '../models/getCarArr.js';
import getWinner from '../models/getWinner.js';

const createResultElement = () => {
  const resultDiv = document.createElement('div');
  resultDiv.setAttribute('id', 'result-wrapper');
  resultDiv.innerHTML = `
    <div id="result-process"></div>
    <div id="result-winner">최종 우승자: </div>
  `;
  $('#app').append(resultDiv);
};

const playGame = countInput => {
  const cars = getCarArr();
  createResultElement();

  while (countInput) {
    cars.forEach(car => {
      car.setMove();
    });
    printGameProcess(cars);
    countInput -= 1;
  }
  printWinner(getWinner(cars));
};

export default playGame;
