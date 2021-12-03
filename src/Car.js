import randomNumberInRange from './randomNumberInRange.js';

export default class Car {
  constructor(name) {
    this.name = name;
    this.distance = 0;
  }

  move() {
    const randomNumber = randomNumberInRange(0, 9);
    if (randomNumber > 4) {
      this.distance++;
    }
  }

  raceString() {
    let race = '';
    for (let i = 0; i < this.distance; i++) {
      race += '-';
    }

    return `${this.name}: ${race}`;
  }
}
