import { generateRandomInteger, appendAtEnd } from './util.js';
import { SCORE_MARKER } from './config.js';

export default class Car {
  constructor(name) {
    this.name = name;
    this.score = '';
  }

  playOneTurn() {
    const randomNumber = generateRandomInteger(0, 9);

    if (randomNumber >= 4) {
      this.score += SCORE_MARKER;
    }
  }

  displayCurrentScore() {
    appendAtEnd('#game-result-content', 'div', `${this.name}: ${this.score}`);
  }

  scoreLen() {
    return this.score.length;
  }

  initScore() {
    this.score = '';
  }
}
