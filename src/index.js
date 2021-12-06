import CarGame from './game/index.js';
import domManipulate from './dom-manipulate.js';

domManipulate();

const game = new CarGame();

const carNamesSubmit = document.getElementById('car-names-submit');
carNamesSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  const userInput = document.getElementById('car-names-input').value;

  game.receiveName(userInput);
});

const racingCountSubmit = document.getElementById('racing-count-submit');
racingCountSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  const userInput = document.getElementById('racing-count-input').value;

  if (!game.isFinished) {
    game.receiveCount(userInput);
  }
});
