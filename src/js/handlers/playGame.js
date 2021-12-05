import $ from '../utils/dom.js';
import printGameProcess from '../views/printGameProcess.js';
import printWinner from '../views/printWinner.js';
import getCarArr from '../models/getCarArr.js';
import getWinner from '../models/getWinner.js';

const createResultElement = () => {
  const resultDiv = document.createElement('div');
  resultDiv.setAttribute('id', 'result-wrapper');
  $('#app').appendChild(resultDiv);
};

const playGame = countInput => {
  const cars = getCarArr(); // 객체들이 모여있는 배열의 형식
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
