import $ from '../utils/dom.js';
import printGameProcess from '../views/printGameProcess.js';
import printWinner from '../views/printWinner.js';
import getCarArr from '../models/getCarArr.js';

const startGame = () => {
  const cars = getCarArr(); // 객체들이 모여있는 배열의 형식
  console.log(cars);
  const resultDiv = document.createElement('div');
  resultDiv.setAttribute('id', 'result-wrapper');

  $('#app').appendChild(resultDiv);

  let countInput = $('#racing-count-input').value;

  while (countInput) {
    // 정지할지 말지 결정
    cars.forEach(car => {
      car.setMove();
    });
    printGameProcess(cars);
    countInput -= 1;
  }
  printWinner(cars);
};

export default startGame;
