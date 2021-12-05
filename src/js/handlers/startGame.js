import $ from '../utils/dom.js';
import printGameProcess from '../views/printGameProcess.js';
import printWinner from '../views/printWinner.js';
import calculateRandomNum from '../models/calculateRandomNum.js';
import getCarArr from '../models/getCarArr.js';

const startGame = () => {
  const carArr = getCarArr();
  const resultDiv = document.createElement('div');
  resultDiv.setAttribute('id', 'result-wrapper');

  $('#app').appendChild(resultDiv);

  let countInput = $('#racing-count-input').value;
  while (countInput) {
    printGameProcess(calculateRandomNum(carArr));
    countInput -= 1;
  }
  printWinner(carArr);
};

export default startGame;
