import {
  hideCounterElement,
  hideResultElement,
} from '../elements/hideElement.js';
import {carInf} from './utils.js';
import RacingCarGame from '../class/RacingCarGame.js';

export default function initGame() {
  hideCounterElement();
  hideResultElement();
  carInf.car = new RacingCarGame();
}
