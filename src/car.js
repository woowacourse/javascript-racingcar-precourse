import { randomMove } from './utils/index.js';

export default function Car(name) {
  this.name = name;
  this.distance = 0;

  this.move = () => {
    this.distance += randomMove();
  };

  this.clear = () => {
    this.distance = 0;
  };
}
