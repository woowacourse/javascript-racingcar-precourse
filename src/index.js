import Game from './game.js';
import { setInitialStyle } from './dom_control.js';
import {
  carNamesSubmitButton,
  racingCountSubmitButton,
} from './dom_element.js';

setInitialStyle();

const game = new Game();

carNamesSubmitButton.addEventListener('click', (e) => {
  e.preventDefault();
  game.createCars();
});

racingCountSubmitButton.addEventListener('click', (e) => {
  e.preventDefault();
  game.getCount();
  game.startGame();
});
