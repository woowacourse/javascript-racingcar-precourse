import $ from '../utils/dom.js';
import printGameProcess from '../views/printGameProcess.js';
import printWinner from '../views/printWinner.js';
import getCarArr from '../models/getCarArr.js';

const startGame = countInput => {
  const cars = getCarArr(); // 객체들이 모여있는 배열의 형식
  const resultDiv = document.createElement('div');
  resultDiv.setAttribute('id', 'result-wrapper');

  $('#app').appendChild(resultDiv);
  while (countInput) {
    cars.forEach(car => {
      car.setMove();
    });
    printGameProcess(cars);
    countInput -= 1;
  }
  printWinner(cars);
};

export default startGame;
