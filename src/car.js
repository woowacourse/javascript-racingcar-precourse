import { randomMove } from './utils/index.js';

export function Car(name) {
  this.name = name;
  this.distance = 0;

  this.move = () => {
    this.distance += randomMove();
  };
}
