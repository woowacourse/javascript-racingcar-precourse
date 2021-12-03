import Game from './game.js';
import { setInitialStyle } from './dom.js';

setInitialStyle();

const game = new Game();
const carNamesSubmitButton = document.getElementById('car-names-submit');

carNamesSubmitButton.addEventListener('click', (e) => {
  e.preventDefault();
  game.createCars();
});

const racingCountSubmit = document.getElementById('racing-count-submit');

racingCountSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  game.getCount();
  game.startGame();
});
